import React, { Component } from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Header from "./Components/Header";
import Landing from "./Components/intro";
import Footer from "./Components/Footer";

import Page1 from "./Components/page1";

export default class extends Component {


  render() {

    return (
      <div>
        <Header />
        <Landing />
        <Page1 />
        <Footer />
      </div>
    );
  }
}
