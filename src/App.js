import React, { Component } from 'react';
import { Editor, EditorState, ContentState } from "draft-js";
import SimpleDecorator from "draft-js-simpledecorator";
import { SuggestionSpan, suggestionStrategy } from "./suggestion";

import logo from './logo.png';
import './App.css';
import './index.css';
import "./Draft.css";

const simpleDecorator = new SimpleDecorator(suggestionStrategy, SuggestionSpan);

let sampleText = `a clean slate.caracolaI would really like it you could e-mail me back.`;

type AppProps = {};
class App extends Component {
  props: AppProps;
  state: { editorState: Object };
  onChange: Function;
  constructor(props: AppProps) {
    super(props);
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
    return (
      <div>
<header>
    <div className="sb-page-header pt-3 pb-5 bg-dark">
        <nav className="navbar ml-3 mr-3 navbar-light bg-transparent">
        <a className="navbar-brand" href="/informacion.html" target="_blank">
        <img src={logo} width="30" height="30" alt="logo"></img>
        </a>
        <a className="navbar-brand" href="/informacion.html" target="_blank">
        <p className="text-white small">Más información</p>
        </a>
        </nav>
        <div className="container text-center">
          <div className="row">
            <div className="col col-lg-12 col-sm-12">
            <img src={logo} className="App-logo img-responsive" alt="logo" />
            <h1 className="App-title">Chejov<span className="blinking-cursor">|</span></h1>
            <h4>Un par de zapatossss, un bloc de notas y un editor.</h4>
            </div>
          </div> 
        </div>
    </div>    
</header>
      <div className="container mb-5 mt-5">
       <div className="row justify-content-md-center">
        <div className="col-lg-8">
        <p className="text-muted mb-1">Escribe o coloca aquí el texto:</p>
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
            <a target="_blank" href="https://twitter/mcarvajal_"> Miguel Carvajal</a>. Coordinación y proyección: <a target="_blank" href="https://twitter/jagaraviles">José A. García Avilés</a>. Glosarios del <a target="_blank" href="http://diccionariodelcliche.umh.es">Diccionario del Cliché</a>.
          </p>
          </div>
       </div>
      </div>
    </div>    
    );
  }
}

export default App;
