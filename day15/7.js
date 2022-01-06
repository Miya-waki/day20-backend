let obj ={
    id: 1,
    username: "rohit",
    address :{
        city:"mumbai",
        state: "mh"
 
    },
}; 
console.log(obj.address);
console.log(obj.address.city);


//add pincode as nested member of address
obj.address.pincode="40001";
console.log(obj.address);