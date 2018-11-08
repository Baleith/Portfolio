import React from 'react';
import { bool, func } from 'prop-types';
import sideBars from './sideBars.module.scss';
import navText from './navText.module.css';

export const About = ({ aboutActive, onClick }) => (
  <aside
    id="aside-left"
    className={`${navText.wrapper} ${sideBars.wrapper} ${sideBars.left}`}
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  >
    <span className={`${aboutActive ? sideBars.active : null} ${navText.wrapper}`}>
      {'Om'}
      <span className={sideBars.hidden}>x</span>
      <span className={`${aboutActive ? navText.coloredText : null} ${navText.span}`}>
        {'m'}
      </span>
      <span className={`${aboutActive ? navText.coloredText2 : null} ${navText.span}`}>
        {'i'}
      </span>
      {'g'}
    </span>
  </aside>
);

About.propTypes = {
  aboutActive: bool.isRequired,
  onClick: func.isRequired,
};
