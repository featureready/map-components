import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Cell = ({ title, caption, icon, active, onClick }) => (
  <a onClick={onClick} className={`${styles.outer} ${active ? `${styles.active}` : ''}`}>
    <img className={styles.image} src={icon} />
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.caption}>{caption}</div>
    </div>
  </a>
);

export default Cell;
