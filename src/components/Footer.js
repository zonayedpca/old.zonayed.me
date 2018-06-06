import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = ({portfolioPage}) => {
  return (
    <React.Fragment>
    {/**<!-- Footer Area -->**/}
    <footer className={"footer-area section-pad " + (portfolioPage ? "" : "bg")}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <ul className="foot-thanks list-inline">
                        <li className="list-inline-item">Thanks</li>
                        <li className="list-inline-item">ধন্যবাদ</li>
                        <li className="list-inline-item">धन्यवाद</li>
                        <li className="list-inline-item">धन्यवाद</li>
                        <li className="list-inline-item">ਧੰਨਵਾਦ</li>
                        <li className="list-inline-item">با تشکر</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                    <ul className="copyright list-inline">
                        <li className="list-inline-item">By Zonayed Ahmed</li>
                        <li className="list-inline-item"><AnchorLink offset={100} href="#about"><span className="fas fa-arrow-up"></span></AnchorLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    {/**<!-- /Footer Area -->**/}
    </React.Fragment>
  )
}

export default Footer;
