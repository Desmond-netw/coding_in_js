let count = 10;
rows = [];

for (let i = 0; i < count; i = i+1) {
    rows.push(i);
}

// using For...of
let result = "";

for (const row of rows){
    result = result + row;
}

console.log(result);