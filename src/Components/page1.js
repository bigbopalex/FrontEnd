import React, { Component } from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Questions1 from "./options1"
import Results1 from "./responses1"
import Submit from "./submitButton"

export default class extends Component {
  state = {
    step: 1,
    Student: '',
    Prof: '',
    TA: '',
    Other: '',
  }

  submit = () => {

  }

  goStepTwo = () =>{
    const {step} = this.state
    this.setState (2)
  }

  handleChange = input => e => {
    this.setState({[input]:e.target.value})
  }

  render() {
    const {step} = this.state
    const {Student, Prof, TA, Other} = this.state
    const values = {Student, Prof, TA, Other}

    switch (step){
    case 1:
      return (
        <div>
          <Questions1 />
          <Results1 />
          <Submit />
        </div>
        //<Questions1 
        //  handleChange = {this.handleChange}
        //  values = {values}
        ///>
      )
    case 1:
      return (
        <h2> second set </h2>
      )
    }
  }
}