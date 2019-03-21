import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';
import Map from '../Map';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import styles from './styles.scss';

const SingleMap = ({
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
    <Map zoom={zoom} center={center}>
      <Marker position={center}>
        {(infoTitle || infoCaption) && (
          <InfoBox
            defaultPosition={{
              lat: center.lat,
              lng: center.lng
            }}
            options={{
              closeBoxURL: ``,
              enableEventPropagation: true,
              pixelOffset: { width: -150 - x, height: -160 - y }
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
    </Map>
  </>
);

SingleMap.propTypes = {
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

SingleMap.defaultProps = {
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

export default SingleMap;
