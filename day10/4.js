function tweethere() {
    let parentdiv = document.querySelector("#parent");

    let prevval = parentdiv.innerHTML;

    // read the input
    let inputval = document.querySelector("#input1").value;


    let newval = `<h1 class="alert alert-primary">${inputval}</h1>`;
    //conacatention
    // old style using + operator
    // parentdiv.innerHTML = prevval + newval;
    // new method :: interpolation
    parentdiv.innerHTML = `${prevval} ${newval}`;
    // to clean the input box we write
    document.querySelector("#input1").value = "";

}