function callbackDemo(fn){
    console.log("test!!!");
    if(typeof fn =="function"){
   
    fn();
    }
}

callbackDemo(100);
callbackDemo(() =>{
    console.log("i am callback");
});
