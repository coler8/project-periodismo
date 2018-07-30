import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import { Editor, EditorState, ContentState } from "draft-js";
import SimpleDecorator from "draft-js-simpledecorator";
import { SuggestionSpan, suggestionStrategy } from "./suggestion";
import logo from './logo.png';
import error from './404.jpg';
import './App.css';
import './index.css';
import "./Draft.css";

const simpleDecorator = new SimpleDecorator(suggestionStrategy, SuggestionSpan);

let sampleText = 'Me acostaré muy tarde, porque tengo mucho trabajo.';

const Informacion = () => (
    <section id="team" className="pb-5">
        <div className="container">
            <h5 className="section-title h1">SOBRE NOSOTROS</h5>
            <div className="row">

                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                        <div className="mainflip">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img className=" img-fluid" src="https://pbs.twimg.com/profile_images/1016709073339895809/Z_ddJhY4_400x400.jpg" alt="card perfil
                                      "/></p>
                                        <h4 className="card-title">Miguel Carvajal</h4>
                                        <p className="card-text">This is basic card with image on top, title,
                                            description and button.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Miguel Carvajal</h4>
                                        <p className="card-text">This is basic card with image on top, title,
                                            description and button.This is basic card with image on top, title,
                                            description and button.This is basic card with image on top, title,
                                            description and button.</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-facebook"> </i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-twitter"> </i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-skype"> </i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-google"> </i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                        <div className="mainflip">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img className=" img-fluid" src="https://image.ibb.co/mvHSKT/foto.jpg" alt="card perfil"/></p>
                                        <h4 className="card-title">Samuel Sánchez</h4>
                                        <p className="card-text">This is basic card with image on top, title,
                                            description and button.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Samuel Sánchez</h4>
                                        <p className="card-text">This is basic card with image on top, title,
                                            description and button.This is basic card with image on top, title,
                                            description and button.This is basic card with image on top, title,
                                            description and button.</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-facebook"> </i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-twitter"> </i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-skype"> </i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-google"> </i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                        <div className="mainflip">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img className=" img-fluid" src="https://www.logolynx.com/images/logolynx/e0/e0c16f4356ff503bf0173e3fdaebbd31.png" alt="card perfil"/></p>
                                        <h4 className="card-title">Sunlimetech</h4>
                                        <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Sunlimetech</h4>
                                        <p className="card-text">This is basic card with image on top, title,
                                            description and button.This is basic card with image on top, title,
                                            description and button.This is basic card with image on top, title,
                                            description and button.</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-facebook"> </i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-twitter"> </i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-skype"> </i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
                                                    <i className="fa fa-google"> </i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>


);

const h3style = {
    textAlign: 'center',
    marginTop: 100
};

const NoMatch = ({ location }) => (
    <div>
        <h3 style={h3style}>
            Error 404: la página que buscas no ha sido encontrada, <code>{location.pathname}</code>
            <img className="me" src={error} alt="Robot imagen"/>

        </h3>
    </div>
);


type AppProps = {};

class App extends Component {
  props: AppProps;
  state: { editorState: Object };
  onChange: Function;

  constructor(props: AppProps) {
    super(props);
   // this.state = {editState:EditorState.createEmpty()};
    let initialContentState = ContentState.createFromText(sampleText);


    this.state = {
      editorState: EditorState.createWithContent(
        initialContentState,
        simpleDecorator
      )
    };
    this.onChange = (editorState: Object) => this.setState({ editorState });
  }


  render() {
      const { editorState } = this.state;

      const editorStyle = {
          borderTop: "1px solid #ddd",
          cursor: "text",
          fontSize: 16,
          marginTop: 10
      };

      const Home = () => (
          <div>
              <div className="container mb-5 mt-5">
                  <div className="row justify-content-md-center">
                      <div className="col-lg-8">
                          <p className="h5">Escribe o coloca aquí el texto:</p>
                          <div className="editorContainer">
                              <Editor
                                  style={editorStyle}
                                  spellCheck={true}
                                  editorState={editorState}
                                  onChange={this.onChange}
                              />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container pb-2">
                  <div className="row justify-content-md-center">
                      <div className="col-lg-5">
                          <p className="text-muted text-center" style={{ marginTop: 50 }}>
                              Idea y desarrollo:
                              <a rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/mcarvajal_"> Miguel Carvajal</a>. Coordinación y proyección: <a rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/jagaraviles">José A. García Avilés</a>.
                              Glosarios del <a rel="noopener noreferrer" target="_blank" href="http://diccionariodelcliche.umh.es">Diccionario del Cliché</a>.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      );

    return (

        <Router>
            <div>
                <header>
                    <div className="sb-page-header pt-3 pb-5 bg-dark">
                        <nav className="navbar ml-3 mr-3 navbar-light bg-transparent">
                            <li className="navbar-brand">
                                <Link to='/'><img src={logo} width="30" height="30" alt="logo"/></Link>
                            </li>
                            <li className="navbar-brand">
                                <Link to='/informacion'><button type="button" className="btn btn-outline-secondary text-white small">Más información</button></Link>
                            </li>
                        </nav>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col col-lg-12 col-sm-12">
                                    <img src={logo} className="App-logo img-responsive fadeInLeft animated" alt="logo" />
                                    <h1 className="App-title">Chejov<span className="blinking-cursor">|</span></h1>
                                    <h4>Un par de zapatos, un bloc de notas y un editor.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/informacion' component={Informacion} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>

    );
  }
}

export default App;
