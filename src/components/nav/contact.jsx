import { bool, func } from 'prop-types';
import React from 'react';
import sideBars from './sideBars.module.scss';
import navText from './navText.module.css';

export const Contact = ({ contactActive, onClick }) => (
  <aside
    id="aside-right"
    className={`${navText.wrapper} ${sideBars.wrapper} ${sideBars.right}`}
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  >
    <span className={`${contactActive ? sideBars.active : null} ${navText.wrapper}`}>
      {'konta'}
      <span className={`${contactActive ? navText.coloredText : null} ${navText.span}`}>
        {'k'}
      </span>
      <span className={`${contactActive ? navText.coloredText2 : null} ${navText.span}`}>
        {'t'}
      </span>
    </span>
  </aside>
);

Contact.propTypes = {
  contactActive: bool.isRequired,
  onClick: func.isRequired,
};
