import React, {useState} from 'react';
import Playground from 'component-playground';
import Button from "./components/button";
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live';
import style from "./editor.module.sass";
import {es6Example} from "./examples/es6Example"
import {reactExample} from "./examples/reactExample";

require("./styles/syntax.css");
require("./styles/codemirror.css");
require("./styles/demo.css");



function Editor() {
    const [state, setState] = useState(true);
    function changeState() {
        setState(!state);
    }
    return (
        <div className="component-documentation">
            <div className={style.buttons}>
                <i onClick={changeState} className="fab fa-js-square" style={state ? {color: "#F7DF1E"} : null}/>
                <i onClick={changeState} className="fab fa-react" style={!state ? {color: "#65DAFB"} : null}/>
            </div>
            {state ?
                <div>
                    <h2>ES6 editor</h2>
                    <Playground
                        codeText={es6Example}
                        es6Console
                        scope={{React: React, Button: Button}}
                    />
                </div>
                :
                <div>
                    <h2>React editor</h2>
                    <div className={style.reactEditor}>
                        <LiveProvider code={reactExample}>
                            <div className={style.reactCode}>
                                <LiveEditor/>
                            </div>
                            <div className={style.reactOutput}>
                                <LiveError/>
                                <LivePreview/>
                            </div>
                        </LiveProvider>
                    </div>
                </div>
            }
        </div>
    );
}

export default Editor;
