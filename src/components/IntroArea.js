import React from 'react';
import TextLoop from 'react-text-loop';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const IntroArea = () => {
  return (
    <React.Fragment>
    {/**<!-- Intro Area -->**/}
        <section className="intro-area d-flex align-items-center h-100">
            <div className="container">
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-md-12">
                        <div className="intro text-center text-uppercase">
                            <p>I am </p>
                            <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                              <div>
                                <h1>Zonayed Ahmed</h1>
                              </div>
                              <div>
                                <h1>Front End Engineer</h1>
                              </div>
                              <div>
                                <h1>A Man of Passions</h1>
                              </div>
                              <div>
                                <h1>A Self Learner</h1>
                              </div>
                            </TextLoop>
                            <ul className="social list-inline">
                                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/zonayedpca"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/zonayedpca"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/zonayedpca"><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/zonayedpca"><i className="fab fa-github-alt"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://www.medium.com/@zonayedpca"><i className="fab fa-medium"></i></a></li>
                            </ul>
                            <span className="scroll-down">
                                <AnchorLink offset={100} href="#about"><i className="fas fa-long-arrow-alt-down"></i></AnchorLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/**<!-- /Intro Area -->**/}
        </React.Fragment>
  )
}

export default IntroArea;
