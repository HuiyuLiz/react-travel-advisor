import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
// import PropTypes from 'prop-types'

const ListItem = React.forwardRef(
  ({ index,place, selected }, ref) => {
    const initImage = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

    if (selected) {
      ref?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    return (
      <Card sx={{ width: '100%', marginBottom: '1rem' }} variant="outlined" ref={ref}>
        <CardMedia
          component="img"
          height="250"
          image={place?.photo?.images?.original?.url || initImage}
          alt={place?.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {index+1}. {place?.name}
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
            <Rating name="read-only" value={place.rating} readOnly />
            <Typography variant="body2" color="text.secondary">
              {place?.num_reviews} reviews
            </Typography>
          </Box>
          <Box flexWrap="wrap" direction="row" mb={1}>
            {place?.cuisine?.map(item => (
              <Chip label={item.name} key={item?.key} style={{ marginRight: ".75rem", marginBottom: ".75rem" }} />
            ))}
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography variant="body2" color="text.secondary">
              Price
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {place?.price_level}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography variant="body2" color="text.secondary">
              Ranking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {place?.ranking}
            </Typography>
          </Box>
          <Box mb={1}>
            {place?.awards?.map((award) => (
              <Box display="flex" justifyContent="space-between" key={award?.display_name}>
                <Box sx={{ mr: '.75rem' }}>
                  <img src={award?.images?.small} alt={award?.display_name} />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {award?.display_name}
                </Typography>
              </Box>
            ))}
          </Box>
          {place.address &&
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="body2" color="text.secondary" style={{ marginRight: '.5rem', }}>
                <LocationOnIcon></LocationOnIcon>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {place?.address}
              </Typography>
            </Box>
          }
          {place.phone &&
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="body2" color="text.secondary" style={{ marginRight: '.5rem', }}>
                <LocalPhoneIcon></LocalPhoneIcon>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {place?.phone}
              </Typography>
            </Box>
          }
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(e) => { place.web_url ? window.open(place.web_url, "_blank") : window.stop() }}>Trip Advisor</Button>
          <Button size="small" onClick={(e) => { place.website ? window.open(place.website, "_blank") : window.stop() }}>Website</Button>
        </CardActions>
      </Card>
    )
  }

)
// ListItem.propTypes = {}

export default ListItem