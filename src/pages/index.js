import React from 'react'

import { RightContainer } from '../containers/rightContainer';
import { LeftContainer } from '../containers/leftContainer'
import { Top } from '../components/nav/top'
import { BottomContainer } from '../containers/bottomContainer'
import { Content } from '../components/content'
import { WelcomeText } from '../components/welcome-text'
import Layout from '../components/layout'


class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWelcomeText: false,
            moveToLeft:  false,
            moveToRight:  false,
            showProjects:  false,
        }
        this.handleClickAbout = this.handleClickAbout.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickProjects = this.handleClickProjects.bind(this);
    }

    handleClickAbout() {
        this.setState({
            moveToRight: !this.state.moveToRight,
            moveToLeft: this.state.moveToLeft ? false : false,
        })
    }
    handleClickContact() {
        this.setState({
            moveToLeft: !this.state.moveToLeft,
            moveToRight: this.state.moveToRight ? false : false,
        })
    }
    handleClickProjects() {
        this.setState({
            moveToLeft: false,
            moveToRight: false,
            showProjects: !this.state.showProjects,
        })
    }

    render() {
        return (
            <Layout>
                <Top />
                <LeftContainer onClick={this.handleClickAbout}/>
                <Content moveToLeft={this.state.moveToLeft} moveToRight={this.state.moveToRight} showProjects={this.state.showProjects}/>
                { this.state.showWelcomeText ? <WelcomeText /> : null }
                <RightContainer onClick={this.handleClickContact}/>
                <BottomContainer onClick={this.handleClickProjects}/>
            </Layout>
        );
    }
}

export default IndexPage