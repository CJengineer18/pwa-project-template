import React, { Suspense } from "react";
import { Router } from "@reach/router";
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';

/*
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Content = React.lazy(() => import("./pages/Content"));
*/

function App() {
    return (
        <div className="App">
            {/*<Suspense fallback={<div />}>*/}
                <Router>
                    <Home path="/" />
                    <Content path="/content" />
                    <About path="/about" />
                </Router>
            {/*</Suspense>*/}
        </div>
    );
}

export default App;
