// let obj = {}; //there is no limitation any number of members can be added

let obj ={
    id:1,
    username:"rohit",
    email:"rohit@gmail.com",
    mobile:"12121212",
};
console.log(obj.id,obj.username);

let msg =`hello ,${obj.username} please respond to you email ${obj.email}`;
console.log(obj.id, obj.username,obj.email,obj.mobile);
//update the members

obj.username ="Mr.Rohit Sharma";
obj.mobile="7171717177";
console.log(obj);

//add new member
obj.age =21;
console.log(obj,obj.age);

//delete a member
delete obj.mobile;
console.log(obj,obj.mobile);


