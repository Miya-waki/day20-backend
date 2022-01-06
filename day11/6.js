function tweet() {
    let parent = document.querySelector("#parent");
    let prevChilds = parent.innerHTML;
    let tweetval = document.querySelector("#tweetbox").value;
    let newchild = `<div class="col-12 p-1">
    <div class="alert alert-primary">
        ${tweetval}
      <div class="mt-2">
        <span onclick="like(this)" style="cursor: pointer"
          >&#128077;</span
        >
        <span>0</span>
        <span class="ms-2" onclick="dislike(this)" style="cursor: pointer"
          >&#128078;</span
        >
        <span>0</span>
      </div>
    </div>
  </div>`;
    parent.innerHTML = newchild + prevChilds;

    document.querySelector("#tweetbox").value = "";
}

function like(param1) {
    let mah = param1.parentElement.children[1];
    let prevval = mah.innerHTML;

    let newval = parseInt(prevval) + 1;
    mah.innerHTML = newval;

}
function dislike(param1) {
    let mah = param1.parentElement.children[3];
    let prevval = mah.innerHTML;

    let newval = parseInt(prevval) + 1;
    mah.innerHTML = newval;

}