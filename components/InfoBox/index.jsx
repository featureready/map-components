import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const InfoBox = ({ title, caption, icon }) => (
  <div className={styles.box}>
    {icon && (
      <div>
        <img className={styles.icon} src={icon} />
      </div>
    )}
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.caption}>{caption}</div>
    </div>
  </div>
);

export default InfoBox;
