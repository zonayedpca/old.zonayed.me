import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const AboutMe = ({data}) => {
  return (
    <React.Fragment>
    {/**<!-- About Area -->**/}
        <section className="about-area section-pad" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about">
                            <h3 className="text-uppercase"><strong>About</strong> Me</h3>
                            <p>I am Zonayed Ahmed, from a small, beautiful country, Bangladesh. I love to work with new things. Also love to add new skills in my pocket continuously. Skill is my weapon and perfection is my habit. Love to code with JavaScript and also love programming.</p>
                            <p>I am currently working as a Full Stack Web Developer. Scroll Down to know more about me</p>
                            <div className="about-btn">
                                <AnchorLink offset={100} className="btn btn-about" data-scroll="smooth" href="#skills"><i className="fas fa-arrow-down"></i> Know More</AnchorLink>
                                <a className="btn btn-about btn-about-white" href="/"><i className="fas fa-download"></i> Download CV</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-lg-block d-none">
                        <div className="about-img">
                            <img className="img-fluid" src={data.profile_cover} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/**<!-- /About Area -->**/}
        </React.Fragment>
  )
}

export default AboutMe;
