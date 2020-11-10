import { Link } from "@reach/router";
import React from "react";

interface IRouterNavBrandProps {
  to: string;
  children?: React.ReactChild | JSX.Element;
}

const RouterNavBrand = (props: IRouterNavBrandProps) => (
  <Link to={props.to} className='navbar-brand'>
    {props.children}
  </Link>
);

export default RouterNavBrand;
