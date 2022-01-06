let inputList = ["delhi", "calcutta", "chennai"];
//let outputList = ["<h1>Delhi</h1>","<h1>Calcutta</h1>","<h1>Chennai</h1>"]

const outputList = inputList.map((item) => `<div>${item}</div>`);
const outputList1 = inputList.map((item) => {
    return `<div>
    <div> </div>
    <div>${item}</div>
    <div> </div><div> </div>
    </div>
    `;

    
});

console.log(outputList1);