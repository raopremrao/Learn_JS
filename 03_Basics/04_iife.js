// Immediately Invoked Function Expressioins (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})(); // ; is necesssry here to avoid syntax errors in some cases(to run next IIFE)
// chai ()

( (name) => {
    // Named IIFE with parameter
    console.log(`DB CONNECTED ONCE AGAIN ${name}`);
})('T Prem');


// This is an IIFE, it runs immediately after it's defined
// It is a function that is executed right after it is defined
// It is useful for creating a private scope, avoiding polluting the global scope
// It can also be used to create a module pattern, where you can expose certain methods or variables while keeping others private
// Example of a module pattern using IIFE




