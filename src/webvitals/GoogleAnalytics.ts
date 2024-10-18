import ReactGA from 'react-ga4'
import IWebVitalsTracking from '../interfaces/IWebVitalsTracking'
import IWebVitalsGaInitOptions from '../interfaces/IWebVitalsGaInitOptions'

const _private = {
  trackerRunning: false,

  initTracker: (
    googleTrackingID: string,
    options?: IWebVitalsGaInitOptions
  ) => {
    if (!_private.trackerRunning) {
      ReactGA.initialize(googleTrackingID, options)
      _private.trackerRunning = true
    }
  }
}

const GoogleAnalytics: IWebVitalsTracking = {
  pageView: (googleTrackingID, path, options) => {
    _private.initTracker(googleTrackingID, options)

    ReactGA.send({ hitType: 'pageview', page: path })
  },

  performance: (googleTrackingID, eventCategory, nonInteraction, options) => {
    _private.initTracker(googleTrackingID, options)

    return (data) => {
      const { name, value, id } = data

      ReactGA.event({
        category: eventCategory,
        action: name,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        label: id,
        nonInteraction: nonInteraction ?? false
      })
    }
  }
}

export default GoogleAnalytics
