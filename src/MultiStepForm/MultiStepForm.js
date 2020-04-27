import React, { Component } from "react";

import MultiStepFormPresentation from "./MultiStepFormPresentation";

export default class MultiStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return <MultiStepFormPresentation {...this.state} />;
  }
}
