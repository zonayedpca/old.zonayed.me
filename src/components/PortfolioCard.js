import React from 'react';

const PortfolioCard = ({data: {name, image, description, demo, source, used}}) => {
  return (
    <div className="col-md-4">
        <div className="portfolio-card">
            <div className="portfolio-img">
                <img className="img-fluid" src={image} alt="" />
            </div>
            <div className="portfolio-desc">
                <h4><a target="_blank" rel="noopener noreferrer" href={demo}>{name}</a></h4>
                <p>{description}</p>
                <ul className="portfolio-details list-inline">
                    {used.map((useone, index) => <li key={index} className="list-inline-item"><i className={useone}></i></li>)}
                    <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={source}><i className="fas fa-arrow-right"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCard;
