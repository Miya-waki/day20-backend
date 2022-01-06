async function getWether() {
    let city = document.querySelector("#input").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f301f97533dc77a26a2d2f868ea19bc&units=metric`;
    let response = await fetch(url);
    let result = await response.json();
    let newchild = `<div style="font-size: 50px; margin-top: 2%;">
                    ${city} ${result.main.temp} <sup>o</sup>C
                    </div>
                    `;
    let parent = document.querySelector("#parent");
    let child = parent.innerHTML;
    parent.innerHTML = `${newchild} ${child}`;
}