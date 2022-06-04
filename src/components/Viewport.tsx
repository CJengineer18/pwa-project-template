import { NavbarContainer } from '../styles/Viewport'
import NavBar from './NavBar'

interface IViewportProps {
  children?: React.ReactChild | JSX.Element
}

const Viewport = ({ children }: IViewportProps) => (
  <NavbarContainer>
    <NavBar />
    {children}
  </NavbarContainer>
)

export default Viewport
