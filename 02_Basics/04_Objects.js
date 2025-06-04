// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "T Prem"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "T",
            lastname: "Prem"}
    }

}

// console.log(regularUser.fullname.userfullname.firstname);

// console.log(tinderUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// console.log(obj3);
// console.log(obj1); 

const users = [
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 2,
        email: "hello2@gmail.com"
    },
    {
        id: 3,
        email: "hello3@gmail.com"
    }
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Returns an array of keys
// console.log(Object.values(tinderUser)); // Returns an array of values
// console.log(Object.entries(tinderUser)); // Returns an array of key-value pairs in the form of arrays in Array
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Returns true if the object has the property, otherwise false


// ++++++++++++++++++++++++++++++++++123+++++++++++++++++++++++++++==

//  Object de-structure and JSON API Intro

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "T Prem"
}

// course.courseInstructor

// const {courseInstructor} = course // Object destructuring
const {courseInstructor: instructor} = course // Object destructuring

// console.log(courseInstructor); // T Prem
console.log(instructor); 


// for react
// const navbar = ({company}) => {

// }

// navbar(company = "Prem")

// ++++++++JSON API Intro+++++++

// JSON - JavaScript Object Notation
// JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
// +++++++++++======= 1
// {
//     "name": "T Prem",
//     "coursename": "JS in Hindi",
//     "price": "free"
// }

//++++++++++++++++++================= 2

// [
//     {},
//     {},
//     {}
// ]







