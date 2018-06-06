import React from 'react';

import PortfolioCard from './PortfolioCard';

const PortfolioTabs = ({active, portfolioPage, data, portfolios}) => {
  const portfoliosContent = data.map((portfolioContent, index) => index < 3 ? <PortfolioCard key={portfolioContent.id} data={portfolioContent} /> : '');
  const portfoliosContentAll = data.map(portfolioContentAll => <PortfolioCard key={portfolioContentAll.id} data={portfolioContentAll} />);
  return (
    <div className={"tab-pane fade show " + (active ? " active" : "")} id={portfolios} role="tabpanel" aria-labelledby={portfolios + "-tab"}>
        <div className="row">
          {portfolioPage ? portfoliosContentAll : portfoliosContent}
        </div>
    </div>
  )
}

export default PortfolioTabs;
