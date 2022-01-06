let list =["delhi","chennai"];

//add in the end
list.splice(list.length,0,"karnataka");
list.splice(list.length,0,"hyderabad");
console.log(list);

//add in the begining
list.splice(0,0,"calcutta");
console.log(list);