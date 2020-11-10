import { RouteComponentProps } from "@reach/router";
import React from "react";
import Viewport from "../containers/Viewport";

const Home = (props: RouteComponentProps) => (
    <Viewport>
        <h1>Hello world</h1>
    </Viewport>
);

export default Home;
