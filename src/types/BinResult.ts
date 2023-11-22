export type BinResult = {
  /** Buffer output of bitmap data */
  bitmap: number[]
  /** Buffer output of SVG or EPS data */
  encodedData: string // TODO: rename to `vector`
  /** Width of the rendered symbology */
  width: number
  /** Height of the rendered symbology */
  height: number
  /** Messages produced by the library during render */
  message: string
  /** Code produced by the library during render */
  code: number
}
