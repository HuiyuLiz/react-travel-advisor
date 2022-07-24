import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ListItem from '../ListItem/index'
import { Grid } from '@mui/material';
import LoadingListItem from '../LoadingListItem';
import RenderCmp from '../RenderCmp'

const List = ({ places, child, isLoading, type, onTypeChange, rating, onRatingChange }) => {
  const [refs, setRefs] = useState([]);

  let renderTemplate
  if (isLoading) {
    renderTemplate = <LoadingListItem></LoadingListItem>
  }

  if (!isLoading) {
    renderTemplate = (
      <RenderCmp hasValue={places}>
        {
          places?.map((place, index) => (
            <Grid item xs={12} md={12} key={place.name}>
              <ListItem index={index} place={place} ref={refs[index]} selected={Number(child) === index}></ListItem>
            </Grid>
          ))
        }
      </RenderCmp>
    )
  }


  useEffect(() => {
    const refs = places?.reduce((acc, value, currentIndex) => {
      acc[currentIndex] = React.createRef();
      return acc;
    }, {});
    setRefs(refs)
  }, [places])

  return (
    <>
      <Grid container spacing={2} style={{ padding: '1.5rem' }}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="type">分類</InputLabel>
            <Select
              labelId="type"
              id="demo-simple-select"
              value={type}
              label="type"
              onChange={(event) => { onTypeChange(event.target.value) }}
              margin="dense"
            >
              <MenuItem value="hotels">旅館</MenuItem>
              <MenuItem value="restaurants">餐廳</MenuItem>
              <MenuItem value="attractions">景點</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="rating">等級</InputLabel>
            <Select
              labelId="rating"
              id="demo-simple-select"
              value={rating}
              label="rating"
              onChange={(event) => { onRatingChange(event.target.value) }}
              margin="dense"
            >
              <MenuItem value={0}>評分</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4.5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', height: '80vh', overflowY: 'scroll', padding: '0 0.5rem 1.5rem 1.5rem'}}>
        {renderTemplate}
      </Grid></>
  )
}
export default List