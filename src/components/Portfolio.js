import React from 'react';

import PortfolioTabs from './PortfolioTabs';

const Portfolio = ({data, portfolioPage}) => {
  return (
    <React.Fragment>
    {/**<!-- Portfolio Area -->**/}
    <section className="portfolio-area section-pad bg" id="portfolio">
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <div className="section-title text-center">
                        <h3 className="text-uppercase"><strong>Portfolio</strong> I have</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="diff-cat">
                        <div className="nav-center">
                            <ul className="nav nav-pills" id="portfolio-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" id="portfolio-1-tab" data-toggle="pill" href="#portfolio-1" role="tab" aria-controls="portfolio-1" aria-selected="true">Web Design</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="portfolio-2-tab" data-toggle="pill" href="#portfolio-2" role="tab" aria-controls="portfolio-2" aria-selected="false">Web Application</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="portfolio-3-tab" data-toggle="pill" href="#portfolio-3" role="tab" aria-controls="portfolio-3" aria-selected="false">Project</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="portfolio">
                        <div className="tab-content" id="portfolio-tabContent">
                            <PortfolioTabs portfolioPage={portfolioPage} data={data.webdesign} portfolios={"portfolio-1"} />
                            <PortfolioTabs portfolioPage={portfolioPage} data={data.webapplication} active={true} portfolios={"portfolio-2"} />
                            <PortfolioTabs portfolioPage={portfolioPage} data={data.project} portfolios={"portfolio-3"} />
                            {portfolioPage ? '' : <div className="row justify-content-md-center">
                                <div className="col-md-6">
                                    <div className="portfolio-more text-center">
                                        <a className="btn btn-about" href="/portfolio"><i className="fas fa-arrow-right"></i> View more</a>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/**<!-- /Portfolio Area -->**/}
    </React.Fragment>
  )
}

export default Portfolio;
