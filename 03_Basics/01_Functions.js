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

console.log(result); 

function loginUserMessage(username = "Prem"){
    if(username === undefined){    // can also be written as if(!username)
        console.log("Please provide a username");
        return;
        
    }
    return `${username} just logged in!`
}

console.log(loginUserMessage());


