let inputList =["delhi","calcutta","chennai"];
let outputList = ["hello Delhi","hello calcutta","hello chennai"];

for(let item of inputList){
    let newItem = `hello ${item.toUpperCase()}`;
    outputList.push(newItem);
}

console.log(inputList);
console.log(outputList);

console.log();

// //appraoch 2
// FileList.map((item)=>{
// `hello ${item.toUpperCase()}`
// });

const list2 = inputList.map((item) => `hello ${item.toUpperCase()}`);
console.log(list2);