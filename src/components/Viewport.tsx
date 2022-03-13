import { Helmet, HelmetProvider } from 'react-helmet-async'
import { NavbarContainer, PageContent } from '../styles/Viewport'
import NavBar from './NavBar'

interface IViewportProps {
  pageTitle: string
  pageDescription?: string
  children?: React.ReactChild | JSX.Element
  navbar?: boolean
}

const Viewport = ({
  pageTitle,
  pageDescription,
  children,
  navbar,
}: IViewportProps) => (
  <HelmetProvider>
    <Helmet>
      <title>{`${pageTitle} | Practice PWA`}</title>
      {pageDescription && <meta name="description" content={pageDescription} />}
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
