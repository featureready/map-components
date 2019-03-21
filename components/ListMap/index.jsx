import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';
import Map from '../Map';
import Cell from '../Cell';
import styles from './styles.scss';

const ListMap = ({ zoom, center, places, carousel }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={carousel ? styles.carouselContainer : styles.listContainer}>
      <div className={carousel ? styles.carousel : styles.list}>
        {places.map(({ position, ...cell }, idx) => (
          <Cell
            onClick={() => {
              setActiveIndex(idx);
            }}
            active={idx === activeIndex}
            key={idx}
            {...cell}
          />
        ))}
      </div>
      <Map zoom={zoom} center={center}>
        {places.map(({ id, position: { lat, lng } }) => (
          <Marker
            key={id}
            position={{
              lat,
              lng
            }}
          />
        ))}
      </Map>
    </div>
  );
};

ListMap.propTypes = {
  zoom: PropTypes.number.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  infoBox: PropTypes.shape({
    title: PropTypes.string,
    caption: PropTypes.string,
    offset: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  })
};

ListMap.defaultProps = {
  zoom: 8,
  center: {
    lat: 0,
    lng: 0
  },
  infoBox: {
    offset: {
      x: 0,
      y: 0
    }
  }
};

export default ListMap;
