import React from 'react';

import logo from '../logo.svg';

const Loader = ({text}) => {
  return (
    <section className="loading-moment">
      <div className="table">
        <div className="table-cell">
          <div className="loader">
            <h3 className="load-head">{text}</h3>
            <img alt="Z" src={logo} />
            <p className="load-text">Loading... Please Wait...</p>
            <p className="load-text small text-uppercase">This page is built using <strong>React JS</strong></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Loader;
