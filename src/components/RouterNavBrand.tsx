import { Link, LinkProps } from "@reach/router";
import React from "react";

type RouterNavBrandProps = React.PropsWithoutRef<LinkProps<{}>> &
React.RefAttributes<HTMLAnchorElement>;

const RouterNavBrand = (props: RouterNavBrandProps) => (
  <Link {...props} className='navbar-brand' />
);

export default RouterNavBrand;
