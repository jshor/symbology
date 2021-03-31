import EncodingMode from '../../types/enums/EncodingMode'
import OutputType from '../../types/enums/OutputType'
import OutputOption from '../../types/enums/OutputOption'
import binding from '../../binding'
import binary from '../binary'

describe('Binary methods', () => {
  afterEach(() => jest.resetAllMocks())

  describe('createBuffer()', () => {
    beforeEach(() => {
      jest
        .spyOn(binding, 'createStream')
        .mockReturnValue({
          message: 'Barcode created',
          code: 2,
          width: 32,
          height: 32,
          bitmap: [],
          encodedData: ''
        })
    })

    it('should call createStream() with the arguments provided by the config', () => {
      const symbol = {
        symbology: 10,
        height: 30,
        whitespaceWidth: 3,
        borderWidth: 5,
        outputOptions: OutputOption.SMALL_TEXT,
        foregroundColor: '00ff00ff',
        backgroundColor: 'ff0000ff',
        fileName: 'myfile.svg',
        scale: 1.3,
        option1: 1,
        option2: 2,
        option3: 3,
        showHumanReadableText: false,
        encoding: EncodingMode.DATA_MODE,
        eci: 0,
        primary: '',
        text: 'example text',
        rotation: 0,
        dotSize: 0.8
      }
      const barcodeData = 'primary data'

      binary.createBuffer(symbol, barcodeData)

      expect(binding.createStream).toHaveBeenCalledWith(
        barcodeData,
        symbol.symbology,
        symbol.height,
        symbol.whitespaceWidth,
        symbol.borderWidth,
        symbol.outputOptions,
        symbol.backgroundColor,
        symbol.foregroundColor,
        symbol.fileName,
        symbol.scale,
        symbol.option1,
        symbol.option2,
        symbol.option3,
        0,
        'example text',
        symbol.encoding,
        symbol.eci,
        symbol.primary,
        symbol.rotation,
        symbol.dotSize
      )
    })

    it('should fallback to default values for values missing in config', () => {
      const symbol = {
        symbology: 10,
        height: 30,
        whitespaceWidth: 3,
        borderWidth: 5,
        outputOptions: 2,
        foregroundColor: '00ff00ff',
        backgroundColor: 'ff0000ff',
        fileName: 'myfile.svg',
        scale: 1.3,
        option1: 1,
        option2: 2,
        option3: 3,
        showHumanReadableText: true,
        encoding: EncodingMode.DATA_MODE,
        eci: 0,
        primary: '',
        text: '',
        rotation: 0,
        dotSize: 0.8
      }
      const barcodeData = 'primary data'

      binary.createBuffer(symbol, barcodeData)

      expect(binding.createStream).toHaveBeenCalledWith(
        barcodeData,
        symbol.symbology,
        symbol.height,
        symbol.whitespaceWidth,
        symbol.borderWidth,
        symbol.outputOptions,
        symbol.backgroundColor,
        symbol.foregroundColor,
        symbol.fileName,
        symbol.scale,
        symbol.option1,
        symbol.option2,
        symbol.option3,
        1,
        barcodeData,
        symbol.encoding,
        symbol.eci,
        symbol.primary,
        symbol.rotation,
        symbol.dotSize
      )
    })
  })

  describe('invoke()', () => {
    describe('when symbol creation succeeds without warnings', () => {
      const result = {
        code: 0,
        message: 'Success',
        bitmap: [],
        encodedData: '<encoded data>',
        width: 10,
        height: 15
      }

      beforeEach(() => {
        jest
          .spyOn(binary, 'createBuffer')
          .mockReturnValue(result)
      })

      it('should resolve with the resulting binary data when symbology is successfully rendered', async () => {
        expect.assertions(1)

        await expect(binary.invoke({
          symbology: 10
        }, '12345', OutputType.SVG)).resolves.toEqual({
          ...result,
          message: 'Symbology successfully created.'
        })
      })

      it('should apply bitmap output option (8) to existing output options for non-PNG images', async () => {
        const config = {
          symbology: 10,
          outputOptions: OutputOption.BARCODE_BIND
        }
        const barcodeData = '12345'

        await binary.invoke(config, barcodeData, OutputType.SVG)

        expect(binary.createBuffer).toHaveBeenCalledTimes(1)
        expect(binary.createBuffer).toHaveBeenCalledWith({
          ...config,
          fileName: 'out.svg',
          outputOptions: config.outputOptions + 8
        }, barcodeData)
      })

      it('should set the output options to bitmap output (8) to non-PNG images wth no previous output specified', async () => {
        const config = {
          symbology: 10,
          outputOptions: 0
        }
        const barcodeData = '12345'

        await binary.invoke(config, barcodeData, OutputType.SVG)

        expect(binary.createBuffer).toHaveBeenCalledTimes(1)
        expect(binary.createBuffer).toHaveBeenCalledWith({
          ...config,
          fileName: 'out.svg',
          outputOptions: 8
        }, barcodeData)
      })

      it('should not mutate the output options for PNG images', async () => {
        const config = {
          symbology: 10,
          outputOptions: OutputOption.BARCODE_BIND
        }
        const barcodeData = '12345'

        await binary.invoke(config, barcodeData, OutputType.PNG)

        expect(binary.createBuffer).toHaveBeenCalledTimes(1)
        expect(binary.createBuffer).toHaveBeenCalledWith({
          ...config
        }, barcodeData)
      })
    })

    describe('when symbol creation succeeds with a warning', () => {
      it('should resolve if the status code is greater than 2', async () => {
        const result = {
          code: 1,
          message: 'Created with warnings',
          bitmap: [],
          encodedData: '<encoded data>',
          width: 10,
          height: 15
        }

        jest
          .spyOn(binary, 'createBuffer')
          .mockReturnValue(result)

        expect.assertions(1)

        await expect(binary.invoke({
          symbology: 10
        }, '12345', OutputType.SVG)).resolves.toEqual(result)
      })
    })

    describe('when the symbol creation fails', () => {
      it('should reject if the status code is greater than 2', async () => {
        const result = {
          code: 3,
          message: 'Failure',
          bitmap: [],
          encodedData: '<encoded data>',
          width: 10,
          height: 15
        }

        jest
          .spyOn(binary, 'createBuffer')
          .mockReturnValue(result)

        expect.assertions(1)

        await expect(binary.invoke({
          symbology: 10
        }, '12345', OutputType.SVG)).rejects.toEqual(result.message)
      })
    })
  })

  describe('getOutputType()', () => {
    it('should return PNG for a file with a .png extension', () => {
      expect(binary.getOutputType('out.PNG')).toEqual(OutputType.PNG)
    })

    it('should return SVG for a file with a .svg extension', () => {
      expect(binary.getOutputType('out.SVG')).toEqual(OutputType.SVG)
    })

    it('should return EPS for a file with a .eps extension', () => {
      expect(binary.getOutputType('out.EPS')).toEqual(OutputType.EPS)
    })

    it('should fall back to PNG for an unrecognized file extension', () => {
      expect(binary.getOutputType('out.tiff')).toEqual(OutputType.PNG)
    })
  })
})
