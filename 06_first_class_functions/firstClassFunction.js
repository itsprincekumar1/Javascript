function a(param1) {
    console.log("a called");
}
// the above is a normal function 
// First class function : The function with an ability to use another function as a value, function as an argument, function as a parameter and can be able to
// return another function are known as first class functions

// Function as a value
var value = function (){
    console.log("This is function as a value");
}
value();

// Function as an argument
function argumentss(param1){
    console.log(param1);
}
argumentss(value);  // we are passing function 'value' as an argument to another function here param1 will be treated as function as parameter

// returning a function from a function
function returning(){
    return function(){
        console.log("This is a returned function.")
    }
}
var returned = returning();
console.log(returned);
returned();


// FUNCTIONS ARE FIRST CLASS CITIZENS IN THE JAVASCRIPT