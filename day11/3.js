
function Increment() {
    let h1 = document.querySelector("#id1");
    let prevvalStr = h1.innerHTML;
    let newval = 0;
    let prevval = parseInt(prevvalStr);
    if (prevval == NaN) {

    }
    else {
        newval = prevval + 1;
    }
    h1.innerHTML = newval;
}

function Decrement() {

    let h1 = document.querySelector("#id1");
    let prevvalStr = h1.innerHTML;
    let newval = 0;
    let prevval = parseInt(prevvalStr);
    if (prevval == NaN) {

    }
    else {
        newval = prevval - 1;
    }
    h1.innerHTML = newval;

}
