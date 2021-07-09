interface IWebVitalsData {
  id: string
  value: number
  name: string
}

export default interface IWebVitalsTracking {
  pageView: (trackingID: string, path: string, options?: any) => void
  performance: (
    trackingID: string,
    eventCategory: string,
    nonInteraction?: boolean,
    options?: any,
  ) => (data: IWebVitalsData) => void
}
