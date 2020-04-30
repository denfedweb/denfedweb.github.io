import React from 'react';
import {HashRouter} from 'react-router-dom';
import Routes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <HashRouter>
            <Navbar/>
            <div className="container content">
                <Routes/>
            </div>
            <Footer/>
        </HashRouter>
    );
}

export default App;

