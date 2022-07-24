import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import { Grid, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import List from "./components/List";
// import ListItem from './components/ListItem'
import Map from "./components/Map";
import useGeolocation from "./hooks/useGeolocation";
import { SelectChangeEvent } from "@mui/material/Select";
import { getPlaces } from "./api/index";
import "./App.css";

function App() {
  let [places, setPlaces] = useState([]);
  let [filteredPlaces, setFilteredPlaces] = useState([]);

  let [isLoading, setIsLoading] = useState(false);
  // let [coordinate, setCoordinate] = useState({ lat: '', lng: '' })
  let [boundary, setBoundary] = useState({});
  let { coordinate, setCoordinate, isCoordinateLoading } = useGeolocation();

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

  const typeChangeHandler = (value) => {
    console.log("typeChangeHandler", value);
    setType(value);
  };
  const ratingChangeHandler = (value) => {
    console.log("ratingChangeHandler", value);
    setRating(value);
  };

  let [child, setChild] = useState(null);

  const setChildHandler = (child) => {
    setChild(child);
    console.log("setChildHandler", { child });
  };
  let [autoComplete, setAutoComplete] = useState(null);
  const onLoad = (autoC) => {
    setAutoComplete(autoC);
  };

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinate({ lat, lng });
    console.log("onPlaceChanged", { lat, lng });
  };

  const getPlacesHandler = () => {
    setIsLoading(true);
    getPlaces(type, boundary.sw, boundary.ne)
      .then((response) => {
        setPlaces(
          response?.filter((place) => place.name && place.num_reviews > 0)
        );
        setFilteredPlaces([]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    if (boundary.sw && boundary.ne) {
      getPlacesHandler();
    }
  }, [type, boundary]);

  useEffect(() => {
    let filtered = places?.length
      ? places.filter((place) => place.rating > rating)
      : [];
    setFilteredPlaces(filtered);
  }, [rating]);

  return (
    <>
      <CssBaseline></CssBaseline>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged}></Header>
        </Grid>
        <Grid item xs={12} md={3}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            child={child}
            isLoading={isLoading}
            type={type}
            onTypeChange={typeChangeHandler}
            rating={rating}
            onRatingChange={ratingChangeHandler}
          ></List>
        </Grid>
        <Grid item xs={12} md={9}>
          <Map
            places={filteredPlaces.length ? filteredPlaces : places}
            isLoading={isCoordinateLoading}
            coordinate={coordinate}
            setCoordinate={setCoordinate}
            setBoundary={setBoundary}
            onSetChild={setChildHandler}
          ></Map>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
