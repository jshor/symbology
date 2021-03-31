type SymbologyResult = {
  /** String output of symbology graphics */
  data?: string
  /** Width of the rendered symbology */
  width: number
  /** Height of the rendered symbology */
  height: number
  /** Messages produced by the library during render */
  message: string
}

export default SymbologyResult
