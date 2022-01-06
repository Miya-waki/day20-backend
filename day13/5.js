async function weatherReport() {
    const city = "mumbai";
    const appid = "2e3e7666b799fceef08b3b1558d3aa9b";
    const unit = "metric";

    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid= ${appid}&units =${unit}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.main.temp);
    const parent = document.querySelector("#parent");
    const childs = parent.innerHTML;
    const newchild = `<h1>${city} ${result.main.temp}</h1>`;

    parent.innerHTML = newchild + childs;
}