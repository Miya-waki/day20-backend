function Increment() {
    let h1 = document.querySelector("#id1");
    let prevval = h1.innerHTML;
    let newval = parseInt(prevval)+1 ;
    h1.innerHTML = newval;
}

function Decrement() {
    let h1 = document.querySelector("#id1");
    let prevval = h1.innerHTML;
    let newval = parseInt(prevval) - 1;
    h1.innerHTML = newval;

}