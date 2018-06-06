import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Sticky from 'react-sticky-el';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../logo.svg';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 100
    }
    this.scrollBehaviour = this.scrollBehaviour.bind(this);
  }

  componentDidMount() {
    this.setState({offset: document.querySelector('.navbar').offsetHeight});
  }

  scrollBehaviour(el) {
    el.scrollIntoView({ behavior: 'smooth' })
    window.scroll(0, el.offsetTop - this.state.offset)
  }

  render() {
    const { portfolioPage } = this.props;
    return (
      <React.Fragment>
      {/**<!-- Navbar Area -->**/}
      <Sticky stickyStyle={{zIndex: '1'}}>
          <div className="nav-area">
              <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container">
                      <a className="navbar-brand text-uppercase" href="/">
                          <img src={logo} alt="" />
                          <span className="brand-name"><strong>Zonayed</strong> Ahmed</span>
                      </a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                          <i className="fas fa-bars"></i>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarText">
                          <ul className="navbar-nav ml-auto text-uppercase">
                              <li className="nav-item">
                                  <a className="nav-link" href="/">Home</a>
                              </li>
                              <li className="nav-item">
                                  {portfolioPage ? <Link scroll={this.scrollBehaviour} className="nav-link" to="/#about">About</Link> : <AnchorLink offset={this.state.offset} className="nav-link" data-scroll="smooth" href="#about">About</AnchorLink>}
                              </li>
                              <li className="nav-item">
                                  {portfolioPage ? <Link scroll={this.scrollBehaviour} className="nav-link" to="/#skills">Skills</Link> : <AnchorLink offset={this.state.offset} className="nav-link" data-scroll="smooth" href="#skills">Skills</AnchorLink>}
                              </li>
                              <li className="nav-item">
                                  <AnchorLink offset={this.state.offset} className={"nav-link " + (portfolioPage ? "active" : "")} data-scroll="smooth" href="#portfolio">Portfolio</AnchorLink>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://with.zonayed.me">Blog</a>
                              </li>
                              <li className="nav-item">
                                  {portfolioPage ? <Link scroll={this.scrollBehaviour} className="nav-link" to="/#contact">Contact</Link> : <AnchorLink offset={this.state.offset} className="nav-link" data-scroll="smooth" href="#contact">Contact</AnchorLink>}
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>
          </Sticky>
          {/**<!-- /Navbar Area -->**/}
          </React.Fragment>
    )
  }
}

export default MenuBar;
