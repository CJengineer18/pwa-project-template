// import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Content from './pages/Content'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

// const About = lazy(() => import('./pages/About'))
// const Content = lazy(() => import('./pages/Content'))
// const NotFound = lazy(() => import('./pages/NotFound'))

const App = (): JSX.Element => (
  <BrowserRouter>
    {/* <Suspense fallback={<div />}> */}
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="content" element={<Content />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    {/* </Suspense> */}
  </BrowserRouter>
)

export default App
