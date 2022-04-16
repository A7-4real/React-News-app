import React, { Component } from "react";
import sssLoader from "../sssLoader.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={sssLoader} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
