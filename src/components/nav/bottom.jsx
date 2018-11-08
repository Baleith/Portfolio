import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowRoundDown } from 'react-icons/io';
import styles from './bottom.module.css';

export const Bottom = () => (
  <div id="bottom" className={styles.container}>
    <IconContext.Provider value={{ className: styles.arrow }}>
      <div>
        <IoIosArrowRoundDown />
      </div>
    </IconContext.Provider>
  </div>
);
