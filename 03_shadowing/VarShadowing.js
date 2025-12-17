// Shadowing of variables declaread using "Var"
var a = 100;
{
    var a = 10;
    console.log(a); // This will print 10
}
console.log(a); // This will also print 10
// Shadowing of a variable declared using var perform the below actions
/*
    1. If the variable is decalred inside a global object and it is getting shadowed inside a block
scope, the value will be changed on the global level.
    2. Since the value of the global object has been changed overall value of the variable declared using
var has been changed just like the above code
*/