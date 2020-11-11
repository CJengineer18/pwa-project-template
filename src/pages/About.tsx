import { RouteComponentProps } from "@reach/router";
import React from "react";
import Viewport from "../components/Viewport";

const About = (props: RouteComponentProps) => (
    <Viewport pageTitle='About'>
        <h1>About</h1>
    </Viewport>
);

export default About;
