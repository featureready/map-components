import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Cell = ({ title, caption, icon }) => (
  <div className={styles.outer}>
    <img className={styles.image} src={icon} />
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.caption}>{caption}</div>
    </div>
  </div>
);

export default Cell;
