import React, { Component } from 'react';
import GoogleMapContainer from './GoogleMapContainer';

class ContactMe extends Component {
  render() {
    return (
      <React.Fragment>
      {/**<!-- Contact Area -->**/}
      <section className="contact-area section-pad" id="contact">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="contact-map">
                          <div id="googlemaps">
                              <GoogleMapContainer />
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                      <div className="contact">
                          <h3 className="text-uppercase"><strong>Contact</strong> Me</h3>
                          <p>If you want to contact me <strong>Email</strong> is always a good medium to connect with me</p>
                          <dl>
                            <dt>Email</dt>
                            <dd>zonayedpca@yahoo.com <span className="text-muted">(Recommended)</span></dd>
                            <dt>Skype</dt>
                            <dd>zonayedpca <span className="text-muted">(Always available)</span></dd>
                            <dt>Phone</dt>
                            <dd>+8801814274346 <span className="text-muted">(Bangladesh)</span> / +917347075818 <span className="text-muted">(India)</span></dd>
                            <dt>Social</dt>
                            <dd>Facebook/Twitter - @zonayedpca <span className="text-muted">(Slow response)</span></dd>
                          </dl>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/**<!-- /Contact Area -->**/}
      </React.Fragment>
    )
  }
}

export default ContactMe;
