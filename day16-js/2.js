let obj = {
    coord: {
      lon: 72.8479,
      lat: 19.0144,
    },
    weather: [
      {
        id: 721,
        main: "Haze",
        description: "haze",
        icon: "50d",
      },
    ],
    base: "stations",
    main: {
      temp: 23.99,
      feels_like: 24.12,
      temp_min: 23.94,
      temp_max: 23.99,
      pressure: 1017,
      humidity: 64,
    },
    visibility: 2200,
    wind: {
      speed: 3.6,
      deg: 100,
    },
    clouds: {
      all: 20,
    },
    dt: 1640920974,
    sys: {
      type: 1,
      id: 9052,
      country: "IN",
      sunrise: 1640914881,
      sunset: 1640954486,
    },
    timezone: 19800,
    id: 1275339,
    name: "Mumbai",
    cod: 200,
  };

  const mydate = new Date(obj.dt*1000);
  console.log(
      `Mumbai Temperature ${
          obj.main.temp
      } ${mydate.getDate()} ${mydate.getFullYear()}`
  );