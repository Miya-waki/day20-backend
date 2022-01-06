console.log("hello js");

function tweethere() {
   
    // get from parent inner html
    let parentdiv = document.querySelector("div");

    let prevval = parentdiv.innerHTML;
    //this is new tweet
    let newval = `<h1>tweet here</h1>`;
    parentdiv.innerHTML = prevval + newval;

    document.querySelector("div").style.color = "blue";
    console.log(prevval);
}