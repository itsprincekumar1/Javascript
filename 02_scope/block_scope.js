// What is a block?
// Every code inside {} is known as block 

// Scope of a variable or function
// Scope defines at what places the function or variable can be accessed
// There are two types of scoped
// 1. Block scope
// 2. Global scope
{
    var a = 10; // global scope - can be accessed anywhere in the program
    let b = 11; // block scope - can only be accessed inside the {}
    const c = 12;   // block scope - can only be accessed inside the {}
}
console.log(a); // accessable
// console.log(b); // not accessable
// console.log(c); // not accessable
// Variables declares using "var" has global scope but variables declared using "let" has block scope
