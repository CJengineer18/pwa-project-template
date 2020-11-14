import ReactGA from "react-ga";

interface WebVitalsData {
  id: unknown;
  value: number;
  name: string;
}

const WebVitals = {
  useGoogleAnalytics: (gaTrackingID: string) => {
    ReactGA.initialize(gaTrackingID);

    const originalGA = ReactGA.ga;

    return function ({ id, value, name }: WebVitalsData) {
      originalGA("send", "event", {
        eventCategory: "Web Vitals",
        eventAction: name,
        eventValue: Math.round(name === "CLS" ? value * 1000 : value),
        eventLabel: id,
        nonInteraction: true,
      });
    };
  },
};

export default WebVitals;
