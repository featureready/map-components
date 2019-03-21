import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import styles from './styles.scss';

const Map = ({
  infoBox: {
    icon,
    title: infoTitle,
    caption: infoCaption,
    offset: { x, y }
  },
  zoom,
  center
}) => (
  <>
    <GoogleMap defaultOptions={{ mapTypeControl: false }} zoom={zoom} center={center}>
      <Marker position={center}>
        {(infoTitle || infoCaption) && (
          <InfoBox
            defaultPosition={new google.maps.LatLng(center.lat, center.lng)}
            options={{
              closeBoxURL: ``,
              enableEventPropagation: true,
              pixelOffset: new google.maps.Size(-150 - x, -160 - y)
            }}
          >
            <div className={styles.infoBox}>
              {icon && (
                <div>
                  <img className={styles.infoBoxIcon} src={icon} />
                </div>
              )}
              <div>
                <div className={styles.infoBoxTitle}>{infoTitle}</div>
                <div className={styles.infoBoxCaption}>{infoCaption}</div>
              </div>
            </div>
          </InfoBox>
        )}
      </Marker>
    </GoogleMap>
  </>
);

const WrappedMap = withScriptjs(withGoogleMap(Map));

const LoadingElem = <div className={styles.loading} />;
const ContainerElem = <div className={styles.container} />;
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
