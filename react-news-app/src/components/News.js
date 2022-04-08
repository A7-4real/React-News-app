import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hellow I am constructor from news component");
    this.state = {};
  }
  render() {
    return (
      <div className="container my-3">
        <h2>SSS top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="myDescription"
              imageUrl="https://www.snopes.com/tachyon/2022/03/GettyImages-1151025209.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
