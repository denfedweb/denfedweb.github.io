import React, {Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Loader from "./components/Loader/Loader";
// import Skills from "./pages/skills/skills";
// import About from "./pages/about/about";
// import Works from "./pages/works/works";
// import Contact from "./pages/contact/contact";
// import Editor from "./pages/editor/editor";

// import Home from "./pages/home/home";
// import Blog from "./pages/blog/blog";
// <Route path="/" exact component={Home}/>

const Skills = lazy(() => import('./pages/skills/skills'));
const About = lazy(() => import('./pages/about/about'));
const Works = lazy(() => import('./pages/works/works'));
const Contact = lazy(() => import('./pages/contact/contact'));
const Editor = lazy(() => import('./pages/editor/editor'));

function Routes() {
    return (
        <Suspense fallback={Loader()}>
            <Switch>
                <Route path="/skills" component={Skills} />
                <Route path="/about" component={About} />
                <Route path="/works" component={Works} />
                {/*<Route path="/blog" component={Blog} />*/}
                <Route path="/contact" component={Contact} />
                <Route path="/editor" component={Editor}/>
                <Redirect to="/about" />
            </Switch>
        </Suspense>
    );
}

export default Routes;
