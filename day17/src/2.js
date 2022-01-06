//External Module
import moment from "moment";
const date = new Date();
console.log(date , date.getDate());

let format1 = moment(date).format("DD-MM-YY");
console.log(format1);
 
let format2 = moment(date).format("DD/MMMM/YY");
console.log(format2);