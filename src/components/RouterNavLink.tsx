import { NavLink, type NavLinkProps } from 'react-router-dom'

type RouterNavLinkProps = React.PropsWithoutRef<NavLinkProps> &
React.RefAttributes<HTMLAnchorElement>

const RouterNavLink = (props: RouterNavLinkProps): JSX.Element => (
  <NavLink className="nav-link" {...props} />
)

export default RouterNavLink
