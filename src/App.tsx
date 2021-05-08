// import { lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import Home from './pages/Home'
import About from './pages/About'
import Content from './pages/Content'

// const Home = lazy(() => import('./pages/Home'))
// const About = lazy(() => import('./pages/About'))
// const Content = lazy(() => import('./pages/Content'))

function App() {
  return (
    <div className="App">
      {/*<Suspense fallback={<div />}>*/}
      <Router>
        <Home path="/" />
        <Content path="/content" />
        <About path="/about" />
      </Router>
      {/*</Suspense>*/}
    </div>
  )
}

export default App
