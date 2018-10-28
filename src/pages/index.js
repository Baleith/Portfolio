import React, {Component} from 'react'

import { RightContainer } from '../containers/rightContainer';
import { LeftContainer } from '../containers/leftContainer'
import { Top } from '../components/nav/top'
import { BottomContainer } from '../containers/bottomContainer'
import { Content } from '../components/content'
import { WelcomeText } from '../components/welcome-text'
import Layout from '../components/layout'


class IndexPage extends Component {
    constructor(props) {

        super(props);
        this.state = {
            moveToLeft:  false,
            moveToRight:  false,
            showProjects:  false,
        }
        this.handleClickAbout = this.handleClickAbout.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickProjects = this.handleClickProjects.bind(this);
        let tt = this.state.moveToLeft && this.state.moveToRight;
        console.log(tt)
    }

    handleClickAbout() {
        this.setState({
            moveToRight: !this.state.moveToRight,
            moveToLeft: false,
            showProjects: false,
        })
    }
    handleClickContact() {
        this.setState({
            moveToLeft: !this.state.moveToLeft,
            moveToRight: false,
            showProjects: false,
        })
    }
    handleClickProjects() {
        this.setState({
            moveToLeft: false,
            moveToRight: false,
            showProjects: !this.state.showProjects,
        })
    }
    showWelcomeText() {
        if (this.state.moveToLeft === false && this.state.moveToRight === false && this.state.showProjects === false) {
            return <WelcomeText />
        }
    }
    render() {
        return (
            <Layout>
                <Top />
                <LeftContainer onClick={this.handleClickAbout}/>
                <Content moveToLeft={this.state.moveToLeft} moveToRight={this.state.moveToRight} showProjects={this.state.showProjects}/>
                { this.showWelcomeText() }
                <RightContainer onClick={this.handleClickContact}/>
                <BottomContainer onClick={this.handleClickProjects}/>
            </Layout>
        );
    }
}

export default IndexPage