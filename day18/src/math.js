function addition(n1, n2) {
  return n1 + n2;
}

function subtraction(n1, n2) {
  return n1 - n2;
}

function multiplication(n1, n2) {
  return n1 * n2;
}

function division(n1, n2) {
  return n1 / n2;
}
//approach es6=>
//export {addititon , subtraction}

//approach2
module.exports = { addition, subtraction, multiplication, division };
