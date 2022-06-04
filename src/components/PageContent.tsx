import { Helmet, HelmetProvider } from 'react-helmet-async'
import { PageContentContainer } from '../styles/PageContent'

interface IPageContentProps {
  pageTitle: string
  pageDescription?: string
  children?: React.ReactNode | JSX.Element
}

const PageContent = (props: IPageContentProps) => {
  const { pageTitle, pageDescription, children } = props

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${pageTitle} | Practice PWA`}</title>
        {pageDescription && (
          <meta name="description" content={pageDescription} />
        )}
      </Helmet>
      <PageContentContainer>{children}</PageContentContainer>
    </HelmetProvider>
  )
}

export default PageContent
