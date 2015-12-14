
import React, { Component, PropTypes } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.css';
import '../assets/css/app.css';
import '../assets/js/bootstrap.js';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Input } from 'react-bootstrap';
import { Glpyhicon } from 'react-bootstrap';
import SmartPanel from '../containers/Demo/SmartPanel.jsx';
import FetchSmartButton from '../containers/Demo/FetchSmartButton.jsx';
import ColorPicker from 'react-color';
import GithubCorner from 'react-github-corner';


// MY OWN README.txt (https://github.com/coryhouse/vin-javascript-starter-kit)
// React: for rich, fast, client-side components
// Redux: for data flows (an alternative to Facebook's Flux) useful on larger apps with complext data flows
// Babel: for compiling ES6 to ES5,
// Browserfy: for bundling all JS including npm packages for use in the browser
// Mocha: for automated tests with Chai for assertions and Cheerio for DOM testing without a browser
// Instanbul: for code coverage
// TrackJS: for JS error tracking in production
// ESLint: for linting JS. Using eslint-plugin-react for additional React specific linting rules
// SASS: for styling
// Edior Config: to support consistent editor settings
// BrowserSync for serving the app via a lightweight HTTP server that supports synchronized testing and debugging on multiple devices
// Gulp: glues all of this together in a handy automated build

// button defaults; get these from Nabeel or Lindsay
var colorSelected = "#336699";
var buttonText = "Schedule Online";
var vanityUrl = "www.healthgrades.com";

class HomePage extends React.Component {

    constructor(){
        super();
        this.state = {
            displayColorPicker: false,
            background: "336699"
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

    handleClick() {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
        var btnText = this.refs.input.getValue();
        var btnUrl = this.refs.vanityurl.getValue();
        vanityUrl = "http://" + btnUrl;
        buttonText = btnText;
        value: btnText;
    }

    handleChangeComplete(color){
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
        colorSelected = color.hex;
        this.setState({ background: color.hex });
        document.getElementById('copy-code').innerHTML = document.getElementById('copyHtml').value;
    }

    render() {  
    
        var  innerButton = <Button onClick={this.handleClick}>Pick</Button>;
    
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 site-header">
                            <h2>HG React Components</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-header">
                                <h1>OAS Landing Page <small>Resource for building and testing the OASLP components</small></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Panel bsStyle="info">
                                <div className="col-md-8">
                                    <h3>Online Scheduling Button</h3>
                                    <p>Adjust the basic settings of your button then generate the code needed to copy and paste into your website.</p>
                                    <div className="input-group">
                                        <Input type="text" id="txtUrlAddress" ref="vanityurl" label="Your vanity URL:" addonBefore="https://" />
                                    </div>
                                    <hr />
                                        <div class="container-fluid">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="col-md-4">
                                                          <div className="input-group">
                                                            <Input type="text" id="txtButtonText" label="Button Text:" ref="input" />
                                                          </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="input-group">
                                                                    <Input type="text" id="txtButtonColor" placeholder={ colorSelected } label="Background Color:" buttonAfter={ innerButton } />
                                                                    <ColorPicker ref="colorpicker2" color={this.state.background} onChangeComplete={this.handleChangeComplete} display={ this.state.displayColorPicker } type="sketch"  />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="button-size">Button Size</label><div className="clear"></div>
                                                            <div className="btn-group" id="button-size">
                                                                <button type="button" className="btn btn-info">Large (200 x 43)</button>
                                                                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <span className="caret"></span>
                                                                    <span className="sr-only">Toggle Dropdown</span>
                                                                </button>
                                                                          <ul className="dropdown-menu">
                                                                            <li><a href="#">Small (30 x 200)</a></li>
                                                                            <li><a href="#">Medium (50 x 240)</a></li>
                                                                            <li><a href="#">Large (55 x 340)</a></li>
                                                                          </ul>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="input-group">
                                            <SmartPanel style={ {    textAlign: 'center', display: 'none' } } params={ this.props.params } id="copyHTML"></SmartPanel>
                                            <Input type="textarea" label="Please copy and paste the code below into your website:" id="copy-code" rows="10" cols="30" />
                                        </div>                              
                                </div>
                                <div className="col-md-4">
                                 <Panel header="Live Button Preview"
                                   bsStyle="info"
                                   params={ this.props.params }>
                                    <Button href={ vanityUrl } target="_blank" style={{background: "#" + this.state.background, width: 200, hieght: 50, color: 'white'}}>{ buttonText }</Button>
                                </Panel>
                                <FetchSmartButton bsStyle="success" params={ this.props.params }></FetchSmartButton>
                                </div>
                            </Panel>
                        </div>
                    </div>
                </div>
                <GithubCorner href="https://github.com/ottomajik" />
            </div>
            )
    }
}

module.exports = HomePage;

