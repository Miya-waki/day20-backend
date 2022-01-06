let obj ={
    "coord": {
        "lon": 77.2167,
        "lat": 28.6667
    },
    "weather": [
        {
            "id": 711,
            "main": "Smoke",
            "description": "smoke",
            "icon": "50d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 292.2,
        "feels_like": 291.52,
        "temp_min": 292.2,
        "temp_max": 292.2,
        "pressure": 1020,
        "humidity": 52
    },
    "visibility": 1600,
    "wind": {
        "speed": 3.09,
        "deg": 280
    },
    "clouds": {
        "all": 95
    },
    "dt": 1641113998,
    "sys": {
        "type": 1,
        "id": 9165,
        "country": "IN",
        "sunrise": 1641087848,
        "sunset": 1641125132
    },
    "timezone": 19800,
    "id": 1273294,
    "name": "Delhi",
    "cod": 200
};

let {dt,name} =obj;

console.log(dt,name);
//destructuring

