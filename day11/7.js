function tweet() {
    let parent = document.querySelector("#tweet");
    let prevval = parent.innerHTML;
    let tweetval = document.querySelector("#parent").value;
    let newval =
        `<div  class="col-12 mx-2 p-2"  >
        <div class="alert alert-primary">
        ${tweetval}
            <div><span onclick="like(this)" style="cursor:pointer">&#128077;</span>
                <span>0</span>
                <span onclick="dislike(this)" style ="cursor:pointer">&#128078;</span>
             <span>0</span>
        </div>
        </div>
            
        
     </div>`;
    parent.innerHTML = newval + prevval;

}




function like(param1) {
    let h1 = param1.parentElement.children[1];
    let prevval = h1.innerHTML;
    let newval = parseInt(prevval) + 1;
    h1.innerHTML = newval;

}

function dislike(param1) {
    let h1 = param1.parentElement.children[3];
    let prevval = h1.innerHTML;
    let newval = parseInt(prevval) + 1;
    h1.innerHTML = newval;
}