import React, { useState, useEffect } from 'react'

const useGeolocation = () => {
    let [isCoordinateLoading, setIsCoordinateLoading] = useState(true)
    let [coordinate, setCoordinate] = useState({
        lat: '',
        lng: ''
    })

    const successHandler = (position) => {
        let coordinate = position.coords;
        setCoordinate({
            lat: coordinate.latitude,
            lng: coordinate.longitude
        });

        setIsCoordinateLoading(false)
    };

    const errorHandler = (err) => {
        //      code: 錯誤編碼, message: 錯誤信息
        //      1: 用戶禁止了定位信息獲取，
        //      2: 為網絡不可用或連接衛星失敗，
        //      3: 為獲取定位所花費的時間過長，
        //      0: 為出現未知錯誤
        alert(err.message);
        setCoordinate({
            lat: 0,
            lng: 0
        });
        setIsCoordinateLoading(false)
    };

    const options = {
        enableHighAccuracy: true, //是否嘗試更精確地讀取緯度和經度，移動設備上，這可能要使用手機上的GPS，這會消耗移動設備更多的電量，定位所需時間也會更長，默認為false
        timeout: 5000, //緩存時間
        maximumAge: 0 //等待響應的最大時間，默認是0毫秒，表示無窮時間
    };

    useEffect(() => {
        /* geolocation IS NOT available */
        if (!("geolocation" in navigator)) {
            errorHandler({
                code: 0,
                message: 'geolocation IS NOT available'
            })
        }
        navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
        console.log('init useGeolocation')
    }, [])
    return { coordinate, setCoordinate,isCoordinateLoading }
}

export default useGeolocation