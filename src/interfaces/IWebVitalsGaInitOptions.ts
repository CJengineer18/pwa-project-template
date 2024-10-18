import { GaOptions } from 'react-ga4/types/ga4'

export default interface IWebVitalsGaInitOptions {
  nonce?: string
  testMode?: boolean
  gtagUrl?: string
  gaOptions?: GaOptions | any
  gtagOptions?: any
}
