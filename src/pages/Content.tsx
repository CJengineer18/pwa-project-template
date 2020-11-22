import { RouteComponentProps } from '@reach/router'
import React from 'react'
import Viewport from '../components/Viewport'

const Content = (props: RouteComponentProps) => (
  <Viewport pageTitle="Content">
    <h1>Content</h1>
  </Viewport>
)

export default Content
