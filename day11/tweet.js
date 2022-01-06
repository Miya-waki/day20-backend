function increment(param1) {
    let h1 = param1.parentElement.children[0];
    let prevVal = h1.innerHTML;
  
    let newVal = parseInt(prevVal) + 1;
    h1.innerHTML = newVal;
  }
  
  function decrement(param1) {
    let h1 = param1.parentElement.children[0];
    let prevVal = h1.innerHTML;
  
    let newVal = parseInt(prevVal) - 1;
    h1.innerHTML = newVal;
  }