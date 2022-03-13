import { Helmet, HelmetProvider } from 'react-helmet-async'
import { NavbarContainer, PageContent } from '../styles/Viewport'
import NavBar from './NavBar'

interface IViewportProps {
  pageTitle: string
  pageSubtitle?: string
  children?: React.ReactChild | JSX.Element
  navbar?: boolean
}

const Viewport = ({
  pageTitle,
  pageSubtitle,
  children,
  navbar,
}: IViewportProps) => (
  <HelmetProvider>
    <Helmet>
      <title>{`${pageTitle} | Practice PWA`}</title>
      {pageSubtitle && <meta name="description" content={pageSubtitle} />}
    </Helmet>
    {navbar ? (
      <NavbarContainer>
        <NavBar />
        {children}
      </NavbarContainer>
    ) : (
      <PageContent>{children}</PageContent>
    )}
  </HelmetProvider>
)

export default Viewport
