import React, { Component } from 'react';

import { RightContainer } from '../containers/rightContainer';
import { LeftContainer } from '../containers/leftContainer';
import { Top } from '../components/nav/top';
import { BottomContainer } from '../containers/bottomContainer';
import { Content } from '../components/landing/landing';
import Layout from '../components/layout';
import { Projects } from '../components/projects/projects';


export default class IndexPage extends Component {
  state = {
    moveToLeft: false,
    moveToRight: false,
    showProjects: false,
  };

  handleClickAbout = () => {
    this.setState(state => ({
      moveToRight: !state.moveToRight,
      moveToLeft: false,
      showProjects: false,
    }));
  }

  handleClickContact = () => {
    this.setState(state => ({
      moveToLeft: !state.moveToLeft,
      moveToRight: false,
      showProjects: false,
    }));
  }

  handleClickProjects = () => {
    console.log('har')
    this.setState(state => ({
      moveToLeft: false,
      moveToRight: false,
      showProjects: !state.showProjects,
    }));
  }

  handleClick = (item) => {
    console.log(item);
    this.setState(state => ({
      item: !state[item],
      moveToLeft: false,
      showProjects: false,
    }));
  }

  render() {
    const { moveToLeft, moveToRight, showProjects } = this.state;
    return (
      <Layout>
        <LeftContainer onClick={this.handleClickAbout} />
        <Top />
        <RightContainer onClick={this.handleClickContact} />
        <Content moveToLeft={moveToLeft} moveToRight={moveToRight} showProjects={showProjects} />
        <BottomContainer onClick={this.handleClickProjects} />
        <Projects />
      </Layout>
    );
  }
}
/* onClick={() => this.handleClick('moveToRight')} */