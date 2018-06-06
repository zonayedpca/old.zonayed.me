import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IntroArea from '../components/IntroArea';
import MenuBar from '../components/MenuBar';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Interested from '../components/Interested';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

import { getAllData } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  async componentDidMount() {
    await this.props.getAllData();
    this.setState({data: this.props.ReducerAllData});
  }

  render() {
    const data = this.state.data;

    if(!data) {
      return <h1>Loading</h1>
    }
    return (
      <React.Fragment>
        <IntroArea />
        <MenuBar />
        <AboutMe data={data.data.details} />
        <Skills data={data.data.skills} />
        <Interested data={data.data.interest} />
        <Portfolio data={data.data.portfolio} />
        <ContactMe />
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
