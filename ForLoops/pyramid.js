
const char =  "#";
const rows = [];
const count = 8;
for ( let i = 0; i < count; i = i + 1){
    rows.push(char);
}

let results = "";
for (const row of rows){
    results = results +"\n"+row;
}
console.log(results);



let number = "";
const iterable = [10,20,40];

for (let value of iterable){
    value += 1;
    number =  value;
    console.log(number)
}

