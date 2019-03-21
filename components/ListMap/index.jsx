import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import Cell from '../Cell';
import styles from './styles.scss';

const Map = ({ zoom, center, places }) => (
  <GoogleMap defaultOptions={{ mapTypeControl: false }} zoom={zoom} center={center}>
    {places.map(({ position: { lat, lng } }) => (
      <Marker
        key={`${lat}_${lng}`}
        position={{
          lat,
          lng
        }}
      />
    ))}
  </GoogleMap>
);

const WrappedMap = withScriptjs(withGoogleMap(Map));

const LoadingElem = <div className={styles.loading} />;
const ContainerElem = <div className={styles.mapContainer} />;
const MapElem = <div className={styles.map} />;

Map.propTypes = {
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

Map.defaultProps = {
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

export default props => (
  <div className={props.carousel ? styles.carouselContainer : styles.container}>
    <div className={props.carousel ? styles.carousel : styles.list}>
      {props.places.map(({ position, ...cell }, idx) => (
        <Cell key={idx} {...cell} />
      ))}
    </div>
    <WrappedMap
      {...props}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
        process.env.GOOGLE_MAPS_API_KEY
      }&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={LoadingElem}
      containerElement={ContainerElem}
      mapElement={MapElem}
    />
  </div>
);
