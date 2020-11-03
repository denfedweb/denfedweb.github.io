import React, {Fragment, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import style from "./Navbar.module.sass";
import {changeEditedStatus} from "../../redux/actions";


function Navbar() {
    const [editState, setEditState] = useState(true);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const {authenticated} = auth;

    function editStatusSwitch(){
      setEditState(!editState);
      dispatch(changeEditedStatus(editState));
    }

    return (
        <Fragment>
            <nav className={`grey darken-4 ${style.Navbar}`}>
                <div className="nav-wrapper container">
                    <Link to="/" className={`hide-on-med-and-down brand-logo ${style.Logo}`}>
                        <img src="/assets/img/favicon.svg" alt="img" />
                        <h5>Denis Fedorovici</h5>
                    </Link>

                    <ul id="nav-mobile" className="right">
                      {authenticated &&
                        <li style={{marginRight: '15px'}}>
                          <div className="switch">
                            <label>
                              User
                              <input type="checkbox" onChange={editStatusSwitch}/>
                              <span className="lever"/>
                              Admin
                            </label>
                          </div>
                        </li>
                      }
                        <li><NavLink to="/editor">Editor</NavLink></li>
                        <li><NavLink to="/works">Portfolio</NavLink></li>
                        <li><NavLink to="/skills">Skills</NavLink></li>
                        <li><NavLink to="/about">About me</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;
