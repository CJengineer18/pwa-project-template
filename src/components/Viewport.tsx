import { Helmet, HelmetProvider } from 'react-helmet-async'
import NavBar from './NavBar'
import { Div } from '../styles/Viewport'

interface IViewportProps {
  pageTitle: string
  pageSubtitle?: string
  children?: React.ReactChild | JSX.Element
}

const Viewport = ({ pageTitle, pageSubtitle, children }: IViewportProps) => (
  <HelmetProvider>
    <Helmet>
      <title>{`${pageTitle} | Practice PWA`}</title>
      {pageSubtitle && <meta name="description" content={pageSubtitle} />}
    </Helmet>
    <Div>
      <NavBar />
      {children}
    </Div>
  </HelmetProvider>
)

export default Viewport
