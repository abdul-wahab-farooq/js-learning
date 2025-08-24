let user = "Wahab";
// 3- Declare a const variable called pi = 3.14 and try to change its value. Observe the error.

const pi = 3.14;
console.log(pi);

// 4- Use var to declare a variable food, redeclare it with a new value, and print.

var food = "Biryani";

var food = "Chicken Qorma";

console.log(food);

// 5- Try redeclaring a variable with let inside the same block. See what happens.

{
    let name = "Abdul Wahab";

    // let name = "Awais"; Error: Already Declared
}

// 6- Inside an if block, declare a var and a let variable. Try accessing both outside the block.

if (true) {
    var name1 = "Abdul Wahab";
    let name2 = "Fsiullah";
    console.log(name2);
}

console.log(name1);

// 7- Inside a function, declare a variable with var. Try printing it outside the function.

function abc() {
    let age = 19;
}

abc();
// console.log(age);

// 8- Write a for loop using var and print the loop variable outside the loop.

for (var i = 0; i < 10; i++) {

}
console.log(i);

// 9- Write a for loop using let and try printing the loop variable outside the loop.

for (let j = 0; j < 10; j++) {

}
// console.log(j);

// 10- Create a const array and push new elements into it. Print results. (Hint: values can be modified but variable reference can’t change).

const array = ["Peaky Blinders", "Money Heist", "Squid Game", "Breaking Bad"];

array.push("Latest Serial");

console.log(array);

// 11- Create a const object (like {name:"Ali"}) and update its property. Then try reassigning the whole object.

const obj = { name: "Ali" };

obj.name = "Abdul Wahab";

// obj = { city: "Faisalabad" };

console.log(obj);

// 12- Make a function testVar() where you declare var x=1; inside an if(true) block and log it outside. What happens?

function testVar() {
    if (true) {
        var x = 1;
    }
    console.log(x);
}

testVar();

// 13- Make a function testLet() where you declare let y=2; inside an if(true) block and log it outside. What happens?

function testLet() {
    if (true) {
        let y = 2;
    }
    // console.log(y);
}
testLet();

function def() {
    let user = "Ali";
    console.log(user);
}
def();
console.log(user);

// 14 - Create a for loop with var i, and inside a setTimeout, print i after 1 second. Notice what happens.

for (var i = 0; i < 11; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);

}

// 15- Solve the above issue by replacing var with let.

for (let i = 0; i < 11; i++) {
    setTimeout(function () {
        console.log(i);

    }, 2000);
}

// 16- Write a program where you declare a const variable API_KEY = "123abc". Try to change it, then explain why it fails.

const API_KEY = "123abc";
// API_KEY = "none";
console.log(API_KEY);


// 17- Create a shopping cart example:

// Use let cartItems = [].

// Push items into it.

// Print updated cart.

// Then change cartItems to a new array and see the difference if you use const instead of let.

let cartItems = [];

cartItems.push("T-Shirt");
cartItems.push(" Shoes");
cartItems.push(" Cap");
console.log("Cart after Adding the items: " + cartItems);

cartItems = ['Mobile', ' Tablet', ' Laptop'];
console.log("Cart after Reassigning the items: " + cartItems);
