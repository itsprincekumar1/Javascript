// In JS we can decalre variables using three different methods
// 1. Using VAR
var a;
var b = "String";
var c = false;
var c = 100;
/*
Variables declared using var contains the below properties
1. Can be redecalred
2. Cab be re-initiallized
3. Hoisted in global variable execution so it is accessible even before the program is executed.
4. Less strict than let and const
*/

// 2. Using LET
let a = 10;
a = 100;
let a = "Prince" //Will throw error
let b = false;

/* 
Variables declared using let contains the below properties
1. Cannot be redeclared.
2. Can be re-initiallized.
3. Not hoisted in global variable execution so it is not accessible before the program execute
4. Strict than var
*/

//3. Using CONST
const a = 10;
const b; // Will throw error
a = 100; // will throw error

/*
Variables declared using const containe the below properties
1. Cannot be re-declared
2. Cannot be re-initialized
3. Not hoisted in global onject like var or let so it is also not accessible
4. Most strict than let and var
MOST IMP : Varibales declared using const should be assinged/initiallized the value to them during the declaration only or else the program will throw error
*/
