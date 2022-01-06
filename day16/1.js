const getWeather = async () =>{
    let city = document.querySelector("#input").value || "mumbai";
    let appid = "1f301f97533dc77a26a2d2f868ea19bc";
    let units = "metric";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${units}`;
    let response = await fetch(url);
    let result = await response.json();

    console.log(city,result.main.temp);
    let parent = document.querySelector("#parent");
    let childs = parent.innerHTML;
    let newchild = `<h3>${city}-${result.main.temp}</h3>`;
    parent.innerHTML = newchild +childs;
};