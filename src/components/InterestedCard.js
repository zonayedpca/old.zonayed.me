import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const InterestedCard = ({data: {title, image, description, link}}) => {
  return (
    <div className="col-lg-3 col-md-6">
        <div className="interest-card">
            <div className="interest-title">
                <span className="interest-icon"><img src={image} alt="" /></span>
                <h4>{title}</h4>
            </div>
            <div className="interest-content">
                <p>{description}</p>
            </div>
            <div className="interest-btn">
                <AnchorLink offset="100" className="btn btn-interest" target={link ? "_blank" : ""} data-scroll="smooth" href={link ? link : "#contact"}>Suggest me</AnchorLink>
            </div>
        </div>
    </div>
  )
}

export default InterestedCard;
