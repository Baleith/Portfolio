import React from 'react';
import { func } from 'prop-types';
import { IconContext } from 'react-icons';
import { IoIosArrowRoundUp } from 'react-icons/io';
import styles from './footer.module.scss';

export const Footer = ({ onClick }) => (
  <footer id="footer" className={styles.footer}>
    <button
      title="Back to top"
      className={styles.scroll}
      onClick={onClick}
      type="button"
    >
      <IconContext.Provider value={{ className: styles.arrow }}>
        <div>
          <IoIosArrowRoundUp />
        </div>
      </IconContext.Provider>
    </button>
  </footer>
);

Footer.propTypes = {
  onClick: func.isRequired,
};
