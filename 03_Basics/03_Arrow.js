const user = {
    username: "Prem",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the course!`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "John";
// user.welcomeMessage()

// console.log(this); // this refers to the global object in non-strict mode, or undefined in strict mode

// function chai(){
//     let username = "Prem";
//     console.log(this.username); // undefined, because 'this' refers to the global object, which does not have a 'username' property
    
// }
// chai()

// const chai = function(){
//     username = "Prem"
//     console.log(this.username); // undefined, because 'this' refers to the global object, which does not have a 'username' property
    
// }
// chai()

const chai = () => {
    let username = "Prem"
    console.log(this.username); // undefined, because 'this' in an arrow function does not refer to the global object, but to the enclosing lexical context, which does not have a 'username' property
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicit return
// }
// const addTwo = (num1, num2) => num1 + num2 // implicit return
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Prem"})

console.log(addTwo(5, 10)); // 15




