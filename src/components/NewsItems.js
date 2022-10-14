import React, { Component } from 'react'

export default class NewsItems extends Component {

  render() {
    let {title, description , imageUrl , newsUrl} = this.props;
    return (
        <div className="card " style={{width: "18rem"}}>
        <img src={(imageUrl) ? imageUrl : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O3OCOZCWOSJE2XF7PECQ2F6OTI.jpg&w=1440"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-dark">More Details</a>
        </div>
      </div>
    )
  }
}
