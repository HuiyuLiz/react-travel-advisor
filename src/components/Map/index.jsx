import React from 'react'
import GoogleMapReact from 'google-map-react';
import LoadingSpinner from '../LoadingSpinner';
import Marker from '../Marker/Marker'
// import PropTypes from 'prop-types'

const Map = ({ places, isLoading, coordinate, setCoordinate, setBoundary, onSetChild }) => {
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  const setCoordinateHandler = (e)=>{
    setCoordinate({ lat: e.center.lat, lng: e.center.lng })
  }

  const setBoundaryHandler =(e)=>{
     setBoundary({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
  }

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAMdo96Ca_kUvF1sTrm9qpvat-3WhSMNws' }}
        defaultCenter={coordinate}
        center={coordinate}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoordinateHandler(e)
          setBoundaryHandler(e)
        }}
        onChildClick={(child) => onSetChild(child)}
      >
        {places?.map((place, index) => (
          <Marker
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            text={place.name}
            key={index}
            index={index+1}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

// Map.propTypes = {}

export default Map