a();    // this will work
b();    // this will throw error

function a()
{
    console.log("a called");
}

var b = function(){
    console.log("b called");
}

// Since we are trying to access function a and b before their initialization, it is allowed for function statement but not for function 
// expression, in case of function expression, the variables will be initiallized as undefined until the line number 9 gets executed here
// so calling the b function will throw error as it will try to call undefined