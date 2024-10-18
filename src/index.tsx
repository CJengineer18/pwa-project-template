import { StrictMode } from 'react'
import { type Root, createRoot } from 'react-dom/client'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
// import GoogleAnalytics from './webvitals/GoogleAnalytics'

const container = document.getElementById('root')

let root: Root

if (container != null) {
  root = createRoot(container)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
/*
serviceWorkerRegistration.register({
  onSuccess: () => {console.log('SW registered successfully')},
  onUpdate: registration => {}
});
*/
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)

// reportWebVitals(GoogleAnalytics.performance('UA-XXXXXX-YY', 'Web Vitals', true))
