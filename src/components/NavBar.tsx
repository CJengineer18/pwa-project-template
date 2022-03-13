import { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap'
import Labels from '../constants/Labels'
import RouterNavBrand from './RouterNavBrand'
import RouterNavLink from './RouterNavLink'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Navbar fixed="top" color="dark" expand="md" dark>
      <RouterNavBrand to="/">{Labels.MAIN_TITLE}</RouterNavBrand>
      <NavbarToggler onClick={() => setOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <RouterNavLink to="/">Home</RouterNavLink>
          </NavItem>
          <NavItem>
            <RouterNavLink to="/content">Content</RouterNavLink>
          </NavItem>
          <NavItem>
            <RouterNavLink to="/about">About</RouterNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavBar
