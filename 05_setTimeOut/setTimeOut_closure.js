function x(){
    var i = 10;
    setTimeout(function(){
        console.log(i);
    },3000)
    console.log("Javascript");
}
// x();
function y(){
    for(var i=1;i<=5;i++)
    {
        setTimeout(function(){
            console.log(i);
        },i*1000)
    }
    console.log("Javascript");
}
// y();
/*
In the above code '6' will get printed 5 times after every 1 second, but why? because of closures.
- The callback function in setTimeout function keeps the reference of variable i in it's lexical environment
which means it is not taking the actual value of the i but only the reference so behind the scene the
value of i is getting incremented but due to the timeout it is not getting printed, once the timer will 
end by that time all the value of i would have been reached to 6 and that is why it will print 6 for 5 time after every second
*/

// to improve the above code we will use let
function z(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000)
    }
    console.log("Javascript");
}
z();
/*
By using let instead of var we are using copy of reference of i instead of the same refernce everytime
so everysecond the copy of i will be incremented and will get printed.
*/