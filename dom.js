// for of
// used for array and string

//array
let arr = ["apple", "magno","banana"]
for (const xyz of arr) {
    console.log(xyz)
}

//string
let name = "Shaik"
for (const b of name) {
    console.log(b)
}

// For Each
// Only Array
let arr = ["apple", "mango", "kiwi", "grapes"];

arr.forEach(a => {
    console.log(a)
});

//for
for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
 }
for (const n of arr) {
    console.log(n);
}