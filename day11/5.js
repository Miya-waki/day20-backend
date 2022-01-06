function increment(param1){
    let mah = param1.parentElement.children[0];
    let prevval=  mah.innerHTML;

    let newval= parseInt(prevval)+1;
    mah.innerHTML=newval;
}
function decrement(param1){
    let h1 = param1.parentElement.children[0];
    let prevval=  h1.innerHTML;

    let newval= parseInt(prevval)-1;
    h1.innerHTML=newval;
}