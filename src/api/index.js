import axios from "axios";

export let getPlaces = async (type, sw, ne) => {
  const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
  try {
    let response = await axios.request(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY

      }
    })
    let data = response?.data?.data || []
    return data
  } catch (error) {
    console.log(error)
  }
}