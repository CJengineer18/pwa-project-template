import ReactGA from "react-ga";

interface IWebVitalsData {
  id: string;
  value: number;
  name: string;
}

interface IWebVitalsTracking {
  initTracker: (...args: any[]) => void;
  pageView: (path: string, ...args: any[]) => void;
  performance: (
    eventCategory: string,
    ...args: any[]
  ) => (data: IWebVitalsData) => void;
}

let trackerRunning = false;

const GoogleAnalytics: IWebVitalsTracking = {
  // args[0] = Google Analytics Tracking ID
  initTracker: (...args) => {
    if (!trackerRunning) {
      ReactGA.initialize(args[0]);
      trackerRunning = true;
    }
  },

  pageView: (path, ...args) => {
    GoogleAnalytics.initTracker(...args);

    ReactGA.pageview(path);
  },

  // args[1]: nonInteraction boolean
  performance: (eventCategory, ...args) => {
    GoogleAnalytics.initTracker(...args);

    return function (data) {
      const { name, value, id } = data;

      ReactGA.event({
        category: eventCategory,
        action: name,
        value: Math.round(name === "CLS" ? value * 1000 : value),
        label: id,
        nonInteraction: args[1] || false,
      });
    };
  },
};

const WebVitals = { GoogleAnalytics };

export default WebVitals;
