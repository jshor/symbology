const path = require('path')
const gyp = require('node-pre-gyp')
const { omit } = require('lodash')
const binary = require('../binary')
const Encoding = require('../../enums/encoding')
const Output = require('../../enums/output')
const Options = require('../../enums/options')
const binding = gyp.find(path.join(__dirname,'../../../package.json'))
const symbology = require(binding)

describe('Binary methods', () => {
  afterEach(() => jest.resetAllMocks())

  describe('createBuffer()', () => {
    beforeEach(() => {
      jest
        .spyOn(symbology, 'createStream')
        .mockReturnValue()
    })

    it('should call createStream() with the arguments provided by the config', () => {
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
        showHumanReadableText: false,
        encoding: Encoding.DATA_MODE,
        eci: 0,
        primary: '',
        text: 'example text'
      }
      const barcodeData = 'primary data'

      binary.createBuffer(symbol, barcodeData)

      expect(symbology.createStream).toHaveBeenCalledWith(
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
        symbol.primary
      )
    })

    it('should fallback to default values for values missing in config', () => {
      jest
        .spyOn(symbology, 'createStream')
        .mockReturnValue()

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
        encoding: Encoding.DATA_MODE,
        eci: 0,
        primary: '',
        text: ''
      }
      const barcodeData = 'primary data'

      binary.createBuffer(symbol, barcodeData)

      expect(symbology.createStream).toHaveBeenCalledWith(
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
        symbol.primary
      )
    })
  })

  describe('invoke()', () => {
    describe('when symbol creation succeeds', () => {
      const result = {
        code: 1,
        message: 'Success',
        encodedData: '<encoded data>',
        width: 10,
        height: 15
      }

      beforeEach(() => {
        jest
          .spyOn(binary, 'createBuffer')
          .mockReturnValue(result)
      })

      it('should resolve with the rendered symbol, with `encodedData` mapped to `data`', async () => {
        expect.assertions(1)

        await expect(binary.invoke({
          symbology: 10
        }, '12345', Output.SVG)).resolves.toEqual({
          ...omit(result, 'encodedData'),
          data: result.encodedData
        })
      })

      it('should throw an error for an unsupported output type', () => {
        expect.assertions(1)

        try {
          binary.invoke({ symbology: 10 }, '12345', 'blah')
        } catch (error) {
          expect(error).toEqual(new Error('Invalid output type: blah'))
        }
      })

      it('should apply bitmap output option (8) to existing output options for non-PNG images', async () => {
        const config = {
          symbology: 10,
          outputOptions: Options.BARCODE_BIND
        }
        const barcodeData = '12345'

        await binary.invoke(config, barcodeData, Output.SVG)

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

        await binary.invoke(config, barcodeData, Output.SVG)

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
          outputOptions: Options.BARCODE_BIND
        }
        const barcodeData = '12345'

        await binary.invoke(config, barcodeData, Output.PNG)

        expect(binary.createBuffer).toHaveBeenCalledTimes(1)
        expect(binary.createBuffer).toHaveBeenCalledWith({
          ...config,
        }, barcodeData)
      })
    })

    describe('when the symbol creation fails', () => {
      it('should reject if the status code is greater than 2', async () => {
        const result = {
          code: 3,
          message: 'Failure',
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
        }, '12345', Output.SVG)).rejects.toEqual({
          message: result.message,
          code: result.code
        })
      })
    })
  })

  describe('getOutputType()', () => {
    it('should return the file name extension', () => {
      expect(binary.getOutputType('out.PNG')).toEqual('png')
    })

    it('should throw an error if the file name has no extension', () => {
      expect.assertions(1)

      try {
        binary.getOutputType('somefile')
      } catch (error) {
        expect(error).toEqual(new Error('Invalid file extension. fileName must end with \'.png\', \'.eps\', or \'.svg\'.'))
      }
    })
  })
})
