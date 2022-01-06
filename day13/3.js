async function callbackendApi(){
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const res = await fetch(url);
    const list = await res.json();
    console.log(list);

    const parent = document.querySelector("#parent");
    for(let item of list){
        const prevChilds = parent.innerHTML;
        const newchilds= `<p>${item.id} ${item.body}</p>`;
        parent.innerHTML = newchilds+prevChilds;
    }
}