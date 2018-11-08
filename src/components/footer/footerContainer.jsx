import React from 'react';
import { Footer } from './footer';

export class FooterContainer extends React.Component {
  state = {
    intervalId: 0,
  };

  scrollStep() {
    const { intervalId } = this.state;
    const scrollStepInPx = 50;
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  }

  scrollToTop() {
    const delayInMs = 16.66;
    const intervalId = setInterval(this.scrollStep.bind(this), delayInMs);
    this.setState({
      intervalId,
    });
  }

  render() {
    return <Footer onClick={() => { this.scrollToTop(); }} />;
  }
}
