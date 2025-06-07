// Function Declaration

function sayMyName(){
    console.log("T");
    console.log(" ");
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("M");
    
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let res = num1 + num2;
    // return res;
    return num1 + num2
}

const result = addTwoNumbers(3, true);

// console.log(result); 

function loginUserMessage(username = "Prem"){
    if(username === undefined){    // can also be written as if(!username)
        console.log("Please provide a username");
        return;
        
    }
    return `${username} just logged in!`
}

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Prem",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user);
handleObject({
    username: "Prem",
    price: 199
});

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(array){
    return array[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600]));

