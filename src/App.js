import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom';
import { Grid, CssBaseline } from '@mui/material';
import Header from './components/Header'
import List from './components/List'
// import ListItem from './components/ListItem'
import Map from './components/Map'
import useGeolocation from './hooks/useGeolocation'
import { SelectChangeEvent } from '@mui/material/Select';
import { getPlaces } from './api/index'
import './App.css';

function App() {
  let [places, setPlaces] = useState([])
  let [filteredPlaces, setFilteredPlaces] = useState([])


  let [isLoading, setIsLoading] = useState(false)
  // let [coordinate, setCoordinate] = useState({ lat: '', lng: '' })
  let [boundary, setBoundary] = useState({})
  let { coordinate, setCoordinate, isCoordinateLoading } = useGeolocation()

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);

  const typeChangeHandler = (value) => {
    console.log('typeChangeHandler', value)
    setType(value);
  };
  const ratingChangeHandler = (value) => {
    console.log('ratingChangeHandler', value)
    setRating(value);
  };



  // const setCoordinateHandler = ({ lat, lng, ne, sw }) => {
  //   console.log('setCoordinateHandler', { lat, lng, ne, sw })
  //   setCoordinate({ lat, lng })
  //   setBoundary({ ne, sw })
  // }
  // const setBoundaryHandler = ({ ne, sw }) => {
  //   console.log('setBoundaryHandler')
  //   setBoundary({ ne, sw })
  // }
  let [child, setChild] = useState(null)

  const setChildHandler = (child) => {
    setChild(child)
    console.log('setChildHandler', { child })
  }
  let [autoComplete, setAutoComplete] = useState(null)
  const onLoad = autoC => {
    setAutoComplete(autoC)
  };

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinate({ lat, lng })
    console.log('onPlaceChanged', { lat, lng })
  }

  const getPlacesHandler = () => {
    setIsLoading(true)
    getPlaces(type, boundary.sw, boundary.ne)
      .then(response => {
        console.log('========= getPlaces =========', response)
        setPlaces(response?.filter((place) => place.name && place.num_reviews > 0))
        setFilteredPlaces([])
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    console.log('boundary', boundary)

    setIsLoading(true)
    let data = [
      {
        "location_id": "19892836",
        "name": "BravoBeer (Banqiao)",
        "latitude": "25.017365",
        "longitude": "121.46916",
        "num_reviews": "325",
        "timezone": "Asia/Taipei",
        "location_string": "Banqiao, New Taipei",
        "photo": {
          "images": {
            "small": {
              "width": "250",
              "url": "https://media-cdn.tripadvisor.com/media/photo-f/1a/c9/41/77/caption.jpg",
              "height": "141"
            },
            "thumbnail": {
              "width": "50",
              "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/c9/41/77/caption.jpg",
              "height": "50"
            },
            "original": {
              "width": "640",
              "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/c9/41/77/caption.jpg",
              "height": "360"
            },
            "large": {
              "width": "640",
              "url": "https://media-cdn.tripadvisor.com/media/photo-o/1a/c9/41/77/caption.jpg",
              "height": "360"
            },
            "medium": {
              "width": "550",
              "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/c9/41/77/caption.jpg",
              "height": "309"
            }
          },
          "is_blessed": true,
          "uploaded_date": "2020-02-02T22:17:30-0500",
          "caption": "布娜飛精選",
          "id": "449397111",
          "helpful_votes": "0",
          "published_date": "2020-02-02T22:17:30-0500",
          "user": {
            "user_id": null,
            "member_id": "0",
            "type": "user"
          }
        },
        "awards": [
          {
            "award_type": "CERTIFICATE_OF_EXCELLENCE",
            "year": "2021",
            "images": {
              "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
              "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
            },
            "categories": [],
            "display_name": "Certificate of Excellence 2021"
          }
        ],
        "doubleclick_zone": "as.taiwan",
        "preferred_map_engine": "default",
        "raw_ranking": "4.738631725311279",
        "ranking_geo": "Banqiao",
        "ranking_geo_id": "13792475",
        "ranking_position": "1",
        "ranking_denominator": "505",
        "ranking_category": "restaurant",
        "ranking": "#1 of 784 Restaurants in Banqiao",
        "distance": "2.921148268075486",
        "distance_string": "2.9 km",
        "bearing": "southeast",
        "rating": "5.0",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$300 - $350",
        "neighborhood_info": [
          {
            "location_id": "12666604",
            "name": "Banqiao / Zhonghe / Yonghe District"
          }
        ],
        "description": "Bravo Beer Bar ●variety of high quality Belgian beers(draft beer and bottle beer). ●outside seating for smokers. ●great music,perfect romantic setting. ●Free wifi. ●full menu in English/Chinese featuring pizza,antipasto,steaks,seafoods ●teas,coffees,non alcoholic drinks. ●payment-cash,credit cardOffers tasty Belgian beers and delicious meals that everyone can enjoy food and beer here.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g13792475-d19892836-Reviews-BravoBeer_Banqiao-Banqiao_New_Taipei.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g13792475-d19892836-BravoBeer_Banqiao-Banqiao_New_Taipei.html",
        "ancestors": [
          {
            "subcategory": [
              {
                "key": "city",
                "name": "City"
              }
            ],
            "name": "Banqiao",
            "abbrv": null,
            "location_id": "13792475"
          },
          {
            "subcategory": [
              {
                "key": "municipality",
                "name": "Municipality"
              }
            ],
            "name": "New Taipei",
            "abbrv": null,
            "location_id": "1432365"
          },
          {
            "subcategory": [
              {
                "key": "country",
                "name": "Country"
              }
            ],
            "name": "Taiwan",
            "abbrv": null,
            "location_id": "293910"
          }
        ],
        "category": {
          "key": "restaurant",
          "name": "Restaurant"
        },
        "subcategory": [
          {
            "key": "sit_down",
            "name": "Sit down"
          }
        ],
        "parent_display_name": "Banqiao",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+886 2 8969 1766",
        "website": "http://inline.app/booking/bravobeer/banqiao2",
        "address_obj": {
          "street1": "No. 273, Section 2, Xianmin Boulevard",
          "street2": "1/f",
          "city": "Banqiao",
          "state": null,
          "country": "Taiwan",
          "postalcode": "220"
        },
        "address": "No. 273, Section 2, Xianmin Boulevard 1/f, Banqiao, New Taipei 220 Taiwan",
        "hours": {
          "week_ranges": [
            [
              {
                "open_time": 690,
                "close_time": 1440
              }
            ],
            [
              {
                "open_time": 690,
                "close_time": 1440
              }
            ],
            [
              {
                "open_time": 690,
                "close_time": 1440
              }
            ],
            [
              {
                "open_time": 690,
                "close_time": 1440
              }
            ],
            [
              {
                "open_time": 690,
                "close_time": 1500
              }
            ],
            [
              {
                "open_time": 690,
                "close_time": 1500
              }
            ],
            [
              {
                "open_time": 690,
                "close_time": 1440
              }
            ]
          ],
          "timezone": "Asia/Taipei"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
          {
            "key": "4617",
            "name": "Italian"
          },
          {
            "key": "9908",
            "name": "American"
          },
          {
            "key": "10621",
            "name": "Brew Pub"
          },
          {
            "key": "10641",
            "name": "Pizza"
          },
          {
            "key": "10670",
            "name": "Pub"
          }
        ],
        "dietary_restrictions": [],
        "booking": {
          "provider": "InLine",
          "url": "https://www.tripadvisor.com/Commerce?p=Restaurants_InLine&src=214593178&geo=19892836&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=35674&bucket=918211&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=234358843&managed=false&capped=false&gosox=fFEEniFfm3dwbEt1FQisQB7MQZKmlADTE-ofxHCUIctk4m4jEi6FpW7srrlFQYnuNGi9I6nuBPmXmunT2F7Y2bVJO15q3T0zJTcxTbQwUGg&cs=1a0b46005cd9a3c753551461ae8a0e8ce"
        },
        "reserve_info": {
          "id": "19892836",
          "provider": "InLine",
          "provider_img": "https://static.tacdn.com/img2/eateries/inline_09.25.2019.png",
          "url": "https://www.tripadvisor.com/Commerce?p=Restaurants_InLine&src=214593178&geo=19892836&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=35674&bucket=918211&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=234358843&managed=false&capped=false&gosox=fFEEniFfm3dwbEt1FQisQB7MQZKmlADTE-ofxHCUIctk4m4jEi6FpW7srrlFQYnuNGi9I6nuBPmXmunT2F7Y2bVJO15q3T0zJTcxTbQwUGg&cs=1a0b46005cd9a3c753551461ae8a0e8ce",
          "booking_partner_id": null,
          "racable": false,
          "api_bookable": false,
          "timeslots": null,
          "bestoffer": null,
          "timeslot_offers": null,
          "button_text": "Reserve",
          "disclaimer_text": null,
          "banner_text": null
        },
        "establishment_types": [
          {
            "key": "11776",
            "name": "Bars & Pubs"
          },
          {
            "key": "10591",
            "name": "Restaurants"
          }
        ]
      },

    ]



    if (boundary.sw && boundary.ne) {
      // setIsLoading(true)
      // setPlaces(data.filter((place) => place.name && place.num_reviews > 0))
      // setFilteredPlaces([])
      // setTimeout(() => {
      //   setIsLoading(false)
      // }, 2500)

      getPlacesHandler()
    }
  }, [type, boundary])

  useEffect(() => {
    let filtered = places?.length ? places.filter(place => place.rating > rating) : []
    setFilteredPlaces(filtered)
  }, [rating])

  return (
    <>
      <CssBaseline></CssBaseline>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged}></Header>
        </Grid>
        <Grid item xs={12} md={3}>
          <List places={filteredPlaces.length ? filteredPlaces : places} child={child} isLoading={isLoading}
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

export default App
