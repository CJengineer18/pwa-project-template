import { Link, LinkProps } from '@reach/router'
import classnames from 'classnames'

type RouterNavLinkProps = React.PropsWithoutRef<LinkProps<{}>> &
  React.RefAttributes<HTMLAnchorElement>

const RouterNavLink = (props: RouterNavLinkProps) => {
  const baseStyles: any[] = ['nav-link']

  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        baseStyles.push({ active: isCurrent })

        return { className: classnames(baseStyles) }
      }}
    />
  )
}

export default RouterNavLink
