let a = 100;
{
    let a = 10;
    console.log(a); // this will print 10
}
console.log(a); // this will print 100

// Shadowing of variables declared using let take place below action
/*
    1. Variables declared using let globally and variables declaues using let in block scope has
different objects.
    2. The global variable has the global object and for the block variable a new block object will be 
created and inside that the block variable object will be created.
    3. Since the change or shadowing is happening inside the block scope the value of block object will
be changed but the value of the global object will remain same.
    4. So by this way the global object remains unchanged
*/