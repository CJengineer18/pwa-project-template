interface IWebVitalsData {
  id: string
  value: number
  name: string
}

export default interface IWebVitalsTracking {
  pageView: (trackingID: string, path: string, options?: object) => void
  performance: (
    trackingID: string,
    eventCategory: string,
    nonInteraction?: boolean,
    options?: object,
  ) => (data: IWebVitalsData) => void
}
