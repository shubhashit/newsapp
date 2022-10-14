import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, dateTime ,source} =
      this.props;
    return (
      <div className="card ">
        <span className="position-absolute top-0  translate-middle center-text badge rounded-pill bg-danger" style={{zIndex:"1" ,left:"90%" , width:"100px"}} >
          {source} 
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O3OCOZCWOSJE2XF7PECQ2F6OTI.jpg&w=1440"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body pb-0">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-dark">
            More Details
          </a>
          <div className="card-footer my-3">
            <small className="text-muted">
              By {this.props.author ? this.props.author : "unknown"}Last updated
              on {new Date(dateTime).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    );
  }
}
