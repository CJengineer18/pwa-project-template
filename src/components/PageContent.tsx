import { Helmet, HelmetProvider } from 'react-helmet-async'
import { PageContentContainer } from '../styles/PageContent'
import Labels from '../constants/Labels'

interface IPageContentProps {
  pageTitle: string
  pageDescription?: string
  withMargin?: boolean
  children?: React.ReactNode | JSX.Element
}

const PageContent = (props: IPageContentProps) => {
  const { pageTitle, pageDescription, children, withMargin } = props

  const Body = withMargin ? PageContentContainer : 'div'

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${pageTitle} | ${Labels.MAIN_PAGE_BRAND}`}</title>
        {pageDescription && (
          <meta name="description" content={pageDescription} />
        )}
      </Helmet>
      <Body>{children}</Body>
    </HelmetProvider>
  )
}

export default PageContent
