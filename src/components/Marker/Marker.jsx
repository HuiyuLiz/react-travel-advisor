import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Marker = (props) => {
  return (
    <>
    <LocationOnIcon color="primary" sx={{ fontSize: 40 }}></LocationOnIcon>
    {props.index}
    </>
  )
}

export default Marker