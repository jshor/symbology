import path from 'path'
// TODO: it is a mystery why the type defined in modules.d.ts is not working...
// eslint-disable-next-line
// @ts-ignore
import gyp from '@mapbox/node-pre-gyp'
import { BinaryInterface } from '../types/BinaryInterface'

const binding = gyp.find(path.join(__dirname,'../../package.json'))
const binary: BinaryInterface = require(binding) // eslint-disable-line

export { binary }
