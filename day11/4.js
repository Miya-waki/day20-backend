function Increment(param1) {
    let h1 = param1.previousElementSibling.previousElementSibling;
    let prevval = h1.innerHTML;
    let newval = parseInt(prevval) + 1;
    h1.innerHTML = newval;
}
function Decrement(param1) {
    let h1 = param1.previousElementSibling;
    let prevval = h1.innerHTML;
    let newval = parseInt(prevval) - 1;
    h1.innerHTML = newval;
}