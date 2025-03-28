const accountId = 123456
let accountEmail = "hidsfhgasdf@gmail.com"
var accountPassword = "1234567890"
accountCity = "Odisha"

// accountId = 2 //not allowed
accountEmail = "HelloWorld@gmail.com"
accountPassword = "0987654321"
accountCity = "Delhi"

/*
Prefer not to use var
because of issue in block scope and function scope
Use let and const
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);     

