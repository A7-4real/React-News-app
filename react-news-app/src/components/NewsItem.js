import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, srcUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem", height: "30rem" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt=""
            style={{ height: "200px", width: "285px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={srcUrl} target="_blank" className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
