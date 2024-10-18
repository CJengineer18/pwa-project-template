import { Link, type LinkProps } from 'react-router-dom'

type RouterNavBrandProps = React.PropsWithoutRef<LinkProps> & React.RefAttributes<HTMLAnchorElement>

const RouterNavBrand = (props: RouterNavBrandProps): JSX.Element => (
  <Link {...props} className="navbar-brand" />
)

export default RouterNavBrand
