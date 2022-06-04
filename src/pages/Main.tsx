import { Outlet, useLocation } from 'react-router-dom'
import Viewport from '../components/Viewport'
import Home from './Home'

const Main = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return <Viewport>{currentPath === '/' ? <Home /> : <Outlet />}</Viewport>
}

export default Main
