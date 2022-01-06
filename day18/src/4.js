let id =100;
let str ="hello world"
let myfn = () =>{
    console.log("hello worlddd")
};

function demo(p1){
    console.log(p1);
if(typeof p1=="function"){
    p1();
}

}

demo(id);
demo(str);
demo(myfn);

demo(() =>{
    console.log("hello universe");
});