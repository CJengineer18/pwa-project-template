import React from "react";
import NavBar from "../components/NavBar";
import '../styles/Viewport.scss';

interface IViewportProps {
    children?: React.ReactChild | JSX.Element;
}

const Viewport = (props: IViewportProps) => (
    <div className='fixed-nav-viewport'>
        <NavBar />
        {props.children}
    </div>
);

export default Viewport;
