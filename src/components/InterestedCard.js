import React from 'react';

const InterestedCard = ({data: {title, description, link}}) => {
  return (
    <div className="col-lg-3 col-md-6">
        <div className="interest-card">
            <div className="interest-title">
                <span className="interest-icon"><img src="assets/img/interest/electric-guitar.svg" alt="" /></span>
                <h4>{title}</h4>
            </div>
            <div className="interest-content">
                <p>{description}</p>
            </div>
            <div className="interest-btn">
                <a className="btn btn-interest" target={link ? "_blank" : ""} data-scroll="smooth" href={link ? link : "#contact"}>Suggest me</a>
            </div>
        </div>
    </div>
  )
}

export default InterestedCard;
