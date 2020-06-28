import React, {Fragment} from 'react';
import style from "./skills.module.sass";

function Skills() {
    return (
        <Fragment>
            <div className={style.header}>
                <img src="/assets/img/skills.png" alt="img" />
            </div>
            <div className={style.cardBlock}>
                <div className="row skill-block">
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/html5.png" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li>Twig</li>
                                    <li>Handlebars</li>
                                    <li><i className="fab fa-uikit"/> UIkit</li>
                                    <li><i className="fab fa-bootstrap"/> Bootstrap</li>
                                    <li>Materialize</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l2 m12 spin"><i className="fas fa-atom fa-spin"/></div>
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/css3.png" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li><i className="fab fa-sass"/> Sass</li>
                                    <li><i className="fab fa-less"/> Less</li>
                                    <li>Stylus</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skill-block">
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/js.png" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li>jQuery</li>
                                    <li>es6+</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l2 m12 spin"><i className="fas fa-atom fa-spin"/></div>
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/rest.png" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li>ajax</li>
                                    <li>axios</li>
                                    <li>fetch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skill-block">
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/react.svg" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li>hooks</li>
                                    <li><i className="fas fa-route"/> react-router</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l2 m12 spin"><i className="fas fa-atom fa-spin"/></div>
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/redux.png" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li>thunk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skill-block">
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/node.png" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li>express</li>
                                    <li>mongoose</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l2 m12 spin"><i className="fas fa-atom fa-spin"/></div>
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/database.svg" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skill-block">
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/vue.png" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li>vue-router</li>
                                    <li>vuex</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l2 m12 spin"><i className="fas fa-atom fa-spin"/></div>
                    <div className="col l5 m12 s12 card horizontal transparent">
                        <div className="card-image">
                            <img src="/assets/img/other.png" alt="img"/>
                        </div>
                        <div className="card-stacked">
                            <div className={`card-content ${style.cardContent}`}>
                                <ul>
                                    <li><i className="fab fa-npm"/> npm</li>
                                    <li><i className="fab fa-yarn"/> yarn</li>
                                    <li>webpack</li>
                                    <li><i className="fab fa-gulp"/> gulp</li>
                                    <li><i className="fab fa-github"/> git</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Skills;
