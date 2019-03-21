import React from 'react';
import styles from './styles.scss';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = props => (
  <GoogleMap defaultOptions={{ mapTypeControl: false }} zoom={props.zoom} center={props.center}>
    {props.children}
  </GoogleMap>
);

const WrappedMap = withScriptjs(withGoogleMap(Map));

const LoadingElem = <div className={styles.loading} />;
const ContainerElem = <div className={styles.container} />;
const MapElem = <div className={styles.map} />;

export default props => (
  <WrappedMap
    {...props}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
      process.env.GOOGLE_MAPS_API_KEY
    }&v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={LoadingElem}
    containerElement={ContainerElem}
    mapElement={MapElem}
  />
);
