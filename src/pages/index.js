import React from 'react'

import { RightContainer } from '../containers/RightContainer';
import { Left } from '../components/nav/left'
import { Top } from '../components/nav/top'
import { Bottom } from '../components/nav/bottom'
import { Content } from '../components/nav/content'
import { WelcomeText } from '../components/welcome-text'
import Layout from '../components/layout'


class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWelcomeText: false,
            moveToLeft:  false,
            moveToRight:  false,
        }
        this.handleClickAbout = this.handleClickAbout.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
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

    render() {
        return (
            <Layout>
                <Top />
                <Left onClick={this.handleClickAbout}/>
                <Content moveToLeft={this.state.moveToLeft} moveToRight={this.state.moveToRight}/>
                { this.state.showWelcomeText ? <WelcomeText /> : null }
                <RightContainer onClick={this.handleClickContact}/>
                <Bottom />
            </Layout>
        );
    }
}

export default IndexPage