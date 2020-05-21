import React from 'react';
import styless from "./Loader.module.sass";

function Loader() {
    return (
        <div className={styless.Loader}>
            <div className="rect">
                <div className="circle">
                    <span className="dot"/>
                    <span className="dot"/>
                </div>
            </div>
        </div>
    );
}

export default Loader;
