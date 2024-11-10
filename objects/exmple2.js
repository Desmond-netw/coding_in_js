//example of muttable objec

const cat = {
    age: 3,
    name: "Pipo",
    greeting: function(name) {
        console.log(`Hello ${name} you are ${age} old today`)
    }
} 

console.log(cat);
cat.greeting("Milo");