import React from 'react'
import { Helmet } from 'react-helmet'
import NavBar from './NavBar'
import { Div } from '../styles/Viewport'

interface IViewportProps {
  pageTitle: string
  pageSubtitle?: string
  children?: React.ReactChild | JSX.Element
}

const Viewport = ({ pageTitle, pageSubtitle, children }: IViewportProps) => (
  <>
    <Helmet>
      <title>{`${pageTitle} | Practice PWA`}</title>
      {pageSubtitle && <meta name="description" content={pageSubtitle} />}
    </Helmet>
    <Div>
      <NavBar />
      {children}
    </Div>
  </>
)

export default Viewport
