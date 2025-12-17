function x(){   // declaring a function x
    var a = 10; // declaring a variable a with value 10 inside x
    function y(){   // declaring a function y inside x
        console.log(a); // printing the value of 'a' declared in x
    }  
    return y;   // returning function y from function x
}

/*  In the above code the lexical environment of x contains the lexical environment of y and when
we return y we are basically returning the lexical environment of y this whole scenario is known as
closure. In brief, closure is when a function contains the lexical environment of another function.
*/

var z = x();    // storing function x in function z
console.log(z); // this will print exact function y instead of print the value of variable a
z();    // this will print the value of 'a' because we are executing the function z which will trigger
// the other lexical environment in the chronological order.