// Primitive

// 7 types :  String, Number, Boolean, null, undefined, Symbol, BigInt





// Reference (Non-primitive)

// 3 types : Objects, Array, Function 

//Array

const heros = ["Ironman", "Thor", "Hulk", "Spiderman"];

// Object
let myObj = {
    name: "T Prem",
    age:  18,
}


// Function 
// function (){}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutbeName ="TPrem"

let anothername = myYoutbeName

console.log(anothername);

let user1 = {
    email: "user1@goole.com",
    upiId: "user1@ybl"
}

let user2 = user1

user2.email = "Hello@gmail.com"

console.log(user1.email);
