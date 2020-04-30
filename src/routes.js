import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Skills from "./pages/skills/skills";
import About from "./pages/about/about";
import Works from "./pages/works/works";
// import Home from "./pages/home/home";
// import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import Editor from "./pages/editor/editor";

// <Route path="/" exact component={Home}/>
function Routes() {
    return (
        <Switch>
            <Route path="/skills" component={Skills} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            {/*<Route path="/blog" component={Blog} />*/}
            <Route path="/contact" component={Contact} />
            <Route path="/editor" component={Editor}/>
            <Redirect to="/about" />
        </Switch>
    );
}

export default Routes;
