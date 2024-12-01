import { NavbarContainer } from '../styles/Viewport'
import NavBar from './NavBar'

interface IViewportProps {
  children?: React.ReactNode | JSX.Element
}

const Viewport = ({ children }: IViewportProps): JSX.Element => (
  <NavbarContainer>
    <NavBar />
    {children}
  </NavbarContainer>
)

export default Viewport
