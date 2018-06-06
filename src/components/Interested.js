import React from 'react';

import InterestedCard from './InterestedCard';

const Interested = ({data}) => {
  const InterestedsContent = data.map(InterestedContent => <InterestedCard key={InterestedContent.title} data={InterestedContent} />);
  return (
    <React.Fragment>
    {/**<!-- Interest Area -->**/}
    <section className="interest-area section-pad section-padding-less" id="interest">
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <div className="section-title text-center">
                        <h3 className="text-uppercase">I am <strong>Interested</strong></h3>
                    </div>
                </div>
            </div>
            <div className="row">
                {InterestedsContent}
            </div>
        </div>
    </section>
    {/**<!-- /Interest Area -->**/}
    </React.Fragment>
  )
}

export default Interested;
