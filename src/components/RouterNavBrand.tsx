import { Link, LinkProps } from 'react-router-dom'

type RouterNavBrandProps = React.PropsWithoutRef<LinkProps> &
  React.RefAttributes<HTMLAnchorElement>

const RouterNavBrand = (props: RouterNavBrandProps) => (
  <Link {...props} className="navbar-brand" />
)

export default RouterNavBrand
