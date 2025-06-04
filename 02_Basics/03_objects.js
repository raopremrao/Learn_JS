// singleton



// object literals


const mySym = Symbol("Key1");




const JsUser = {
    name: "Prem",
    "full name": "T Prem",
    [mySym]: "mykey1",
    age: 18,
    locaation: "India",
    email: "raom61337@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // it will work
// console.log(JsUser.full name); // it will not work, because of space in the key
// console.log(JsUser.[mySym]);

JsUser.email = "tm74rao@gmail.com"
// Object.freeze(JsUser); // it will not allow to change the object
// JsUser.email = "raoom61337@gmail.com" // it will not change the email because the object is frozen
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
}

console.log(JsUser.greeting());




