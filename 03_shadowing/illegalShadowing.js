let a = 100;
{
    // var a = 10; // this is not allowed and it is known as illegal shadowing
    console.log(a);
}

/*
    1. In the above code when we declare the variable using let in the global scope a global object 
for a will be created.
    2. When we are trying to declare another variable 'a' using var inside the block scope it is not 
allowed.
    3. We know that the object for variables declared using var will be global object so when we will
declare the variable 'a' inside block scope a global object of 'a' will be created.
    4. Now since we already have an global object for a which was decalred using let in the global 
scope, the 'var a' will throw error
    5. That is why it is illegal to decalre variables using var.
*/