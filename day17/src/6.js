let list1 =["delhi","calcutta","chennai"];

let list2=[...list1];
let list3 = [...list1,"mumbai"];

//modification in list1
list1.push("kerala");
console.log(list1);
console.log(list2);
console.log(list3);
