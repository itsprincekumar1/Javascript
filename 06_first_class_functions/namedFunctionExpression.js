// Named function expression : Using named function instead of anonymous function while declaring a function expression 
var b = function xyz()
{
    console.log("b called");
}
console.log(b); // this will print the function xyz
b();    // this will print "b called" as it will execute the xyz function
xyz(); // this will throw an error as xyz is not decalred in the global scope and it has been assigned as a value to the function b so it cannot be called in global scope
