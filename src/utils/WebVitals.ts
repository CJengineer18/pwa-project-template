import { initialize, InitializeOptions, pageview, event } from 'react-ga'

interface IWebVitalsData {
  id: string
  value: number
  name: string
}

interface IWebVitalsTracking {
  pageView: (
    googleTrackingID: string,
    path: string,
    options?: InitializeOptions,
  ) => void
  performance: (
    googleTrackingID: string,
    eventCategory: string,
    nonInteraction?: boolean,
    options?: InitializeOptions,
  ) => (data: IWebVitalsData) => void
}

const _private = {
  trackerRunning: false,

  initTracker: (googleTrackingID: string, options?: InitializeOptions) => {
    if (!_private.trackerRunning) {
      initialize(googleTrackingID, options)
      _private.trackerRunning = true
    }
  },
}

const GoogleAnalytics: IWebVitalsTracking = {
  pageView: (googleTrackingID, path, options) => {
    _private.initTracker(googleTrackingID, options)

    pageview(path)
  },

  performance: (googleTrackingID, eventCategory, nonInteraction, options) => {
    _private.initTracker(googleTrackingID, options)

    return (data) => {
      const { name, value, id } = data

      event({
        category: eventCategory,
        action: name,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        label: id,
        nonInteraction: nonInteraction || false,
      })
    }
  },
}

const WebVitals = { GoogleAnalytics }

export default WebVitals
