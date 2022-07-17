import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
// import PropTypes from 'prop-types'

const LoadingListItem = (props) => {
  return (
    <Card sx={{ width: '100%', marginBottom: '1rem' }} variant="outlined">
      <Skeleton variant="rectangular" height={250} />
      <Box sx={{ pt: 0.5, pl: 1.5, pr: 1.5, pb: 1.5 }}>
        <Skeleton height={30} />
        <Skeleton height={30} />
        <Skeleton height={30} />
        <Skeleton width="60%" height={30} />
      </Box>
    </Card>
  )
}
// LoadingListItem.propTypes = {}

export default LoadingListItem