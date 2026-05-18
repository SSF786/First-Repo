
//for each
//iterates mainly arrays and strings

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

//for of
let str = "Atiya"

for (const n of str) {
    console.log(n);
}

//for in
const Employee = {
    name : "Samreen",
    isStudent : true,
    age : 22,
    location : "Hyderabad",
};

for (const key in Employee) {
    console.log(key);
}

//for of
let arr1 = ["apple","mango","kiwi"];
for (const element of arr1) {
    console.log(element);
}

//for of
let str1 = "2345";
for (const i of str1) {
    console.log(i);
}

//for-in
//iterates only objects

const Employee1 = {
    name : 'Taqi',
    isStudent : true,
    age : 20,
    location : "Hyderabad",
};

for (const value in Employee) {
    console.log(Employee[value]);
    
}
//callback function
function parent(a) {
    console.log("This is parent");
    a();
} 

function child() {
    console.log("This is child");
}

parent(child);

//closure

function parent() {
    let name = "Shah"
    return function child() {
        console.log(name+' '+ "Faisal");
    }
}

let result = parent();
result();
