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
                              <form id="ajax-contact" action="assets/php/mailer.php" method="POST">
                                  <div className="form-row">
                                      <div className="form-group col-md-6">
                                          <input name="fName" type="text" className="form-control" id="fName" placeholder="First Name" />
                                      </div>
                                      <div className="form-group col-md-6">
                                          <input name="lName" type="text" className="form-control" id="lName" placeholder="Last Name" />
                                      </div>
                                  </div>
                                  <div className="form-group">
                                      <input name="em" type="email" className="form-control" id="em" placeholder="Email" />
                                  </div>
                                  <div className="form-group">
                                      <textarea name="message" className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                                  </div>
                                  <button type="submit" className="btn btn-about"><i className="fab fa-telegram-plane"></i> Send Message</button>
                                  {/**<!-- Submit Status -->**/}
                                  <span id="form-messages">All fields required</span>
                              </form>
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
