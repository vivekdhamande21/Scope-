// // ** Scope **
// //Function Scope :- Variable defined inside a function are not accessible (visible) from outside the function.
 

let sum  = 6;  //Globle Scope
function calSum(a,b){
    let sum = a+b;  //Local Scope
    console.log(sum); // OP : 3
}
calSum(1,2);
console.log(sum); // OP :- 6


// //Block Scope : Variable declared inside a { } blcok cannot be accessed from outside the block

{
    let a = 25;
}
console.log(a); // a is not defined
// //In the place of let use var then it is accessible but its not recommended

for (let index = 0; index < 5; index++) {
        console.log(index);  //Block Scope
}


let age = 25;
if(age>=18) {
    let str = "adult";
    console.log(str);
}

//Lexical Scope: A variable defined outside a function can be accessible
// inside another function defined after the variable declaration.
//Opposite is not true
function outerFun(){
    let x = 5;
    let y =6;
    function innerFun(){
        console.log(x);
        console.log(y);  
    } 
    innerFun();
}
outerFun();


//Qs. What will be the output
let greet1 = "Hello";
function changeGreet(){
    let greet = "Namaste";
    console.log(greet1);
    function innerGreet(){
        console.log(greet1);
    }
    innerGreet();
}
console.log(greet1);
changeGreet();


//Function Expressions
const variable = function(arg1,arg2){     //Nameless Function 
    return arg1+ arg2; 
}
console.log(variable(1,2));


//Higher Order Function :- A Function that does one or both
// Takes one multiple functions as arguments
//returns a function  

function multipleGreet(fun,count){
    for(let i =1; i<=count; i++ ){
        fun();
    }
}
let greet = function(){
    console.log("Hello");
}
multipleGreet(greet,2);


let odd = function (n) {
    console.log(!(n%2==0));
}
let even = function (n) {
    console.log((n%2==0));
}
odd(10);
odd(5);
even(10);
even(5);

function  oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("Wrong Request");
    }
}
let request = "odd" //even

//Methods 
//Action that can performed on an object.
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}