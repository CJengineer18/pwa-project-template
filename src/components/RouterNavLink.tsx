import { NavLink, NavLinkProps } from 'react-router-dom'

type RouterNavLinkProps = React.PropsWithoutRef<NavLinkProps> &
  React.RefAttributes<HTMLAnchorElement>

const RouterNavLink = (props: RouterNavLinkProps) => (
  <NavLink className="nav-link" {...props} />
)

export default RouterNavLink
