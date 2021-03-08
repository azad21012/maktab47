// let arr = ["John", "Smith"]


// let [firstName, title] = arr;

// console.log(firstName,title)

// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(firstName,title)

//-----------------------------------------------------

// Works with any iterable on the right-side

let [a, b, c] = "abc"; // ["a", "b", "c"]
console.log(a,b,c,)


let user = {
  name: "John",
  age: 30
};
console.log(Object.entries(user))
// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, then age:30
}


//swap

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(rest)


//----------------------------------------------------------

// object destructing

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200


//-------------------
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;


// error
// console.log(height)

console.log(options.height)


// smart-functions

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  console.log(title,width,height,items)
}

showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
