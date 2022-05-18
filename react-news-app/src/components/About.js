import PropTypes from "prop-types";
import React, { Component } from "react";

export class About extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1 className="text-center">Social Street Smart</h1>
        <p>
          With the advent of Internet, the problems faced by the people have
          also grown. These include abusive languages, fake news articles,
          click-baits, malicious websites and security attacks.
        </p>
        <br></br>
        <p>
          The aim of this project is to develop a Chrome Extension to make
          Internet a safer and more productive service for the users.
        </p>
        <br></br>
        <p>
          Social Street Smart chrome extension provides context menu for
          Disinformation in Image which enables user to lookup any Image on the
          web and get results about where that has been used.
        </p>
      </div>
    );
  }
}

export default About;
