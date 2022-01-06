let list = ["delhi","calcutta","mumbai"];

//iterate 
for(let i=0 ; i<list.length ; i++){
    let str = list[i];
    console.log(str);
}

console.log();

//iterate ::2

for(let item of list){
    console.log(item);
}

console.log();
//iterate ::3 ::lambda and stream

list.forEach((value,index) =>{
console.log(value,index);
});