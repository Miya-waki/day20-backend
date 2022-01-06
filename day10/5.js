function tweethere() {
    let parentdiv = document.querySelector("#parent");

    let prevval = parentdiv.innerHTML;


    let inputval = document.querySelector("#input1").value;


    if (inputval.length > 3) {
        
        let newval = `<h1 class="alert alert-primary">${inputval}</h1>`;

        parentdiv.innerHTML = `${newval} ${prevval}`;

        document.querySelector("#input1").value = "";
    }
    else {
        // this shows alert alert("tweet should be greater than 3!!")
        document.querySelector("#input1").style.border = "1px solid red";
    }




}

function validateborder(){
    let inputvlaue = document.querySelector("#input").value;
    if(inputval.length>3){
        document.querySelector("#input1").style.border = "1px solid black";
    }
}