import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loader from '../components/Loader';
import MenuBar from '../components/MenuBar';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

import { getAllData } from '../actions';

class PortFolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      portfolioPage: true
    }
  }

  async componentDidMount() {
    await this.props.getAllData();
    this.setState({data: this.props.ReducerAllData});
  }

  render() {
    const data = this.state.data;

    if(!data) {
      return <Loader text="See What I've Done" />
    }
    return (
      <React.Fragment>
        <MenuBar portfolioPage={this.state.portfolioPage} />
        <Portfolio data={data.data.portfolio} portfolioPage={this.state.portfolioPage} />
        <Footer portfolioPage={this.state.portfolioPage} />
      </React.Fragment>
    )
  }
}

function mapStateToProps({ReducerAllData}) {
  return {ReducerAllData}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getAllData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortFolio);
