import { RouteComponentProps } from "@reach/router";
import React from "react";
import Viewport from "../containers/Viewport";

const Content = (props: RouteComponentProps) => (
    <Viewport>
        <h1>Content</h1>
    </Viewport>
);

export default Content;
