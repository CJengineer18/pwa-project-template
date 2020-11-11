import { RouteComponentProps } from "@reach/router";
import React from "react";
import Viewport from "../components/Viewport";

const Home = (props: RouteComponentProps) => (
    <Viewport pageTitle='Home'>
        <h1>Hello world</h1>
    </Viewport>
);

export default Home;
