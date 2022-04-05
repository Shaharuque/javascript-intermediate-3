//the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript.
//scenario: varible declaration ,if varible is declared using var keyword then before assigning the varible with value, varible it can be accessed as following the hoisting concept JS assigning varible with undefine at the top of the code

//var a=undefined
// console.log(a) //here i will got ans like: undefined but not error
// var a=5

//if varible declared using const or let then before assigning varible if we try to access varible it will show 'Cannot access 'b' before initialization' this error, tho hoisting thik e hoy let and const ar but let/const diye declared varible ta undefine diye assigning hoy na tai error show korey

//let a
// console.log(b) //here i will got ans like: Cannot access 'b' before initialization
// let b=5



///scenario: function declaration:
//Like variables, the JavaScript engine also hoists the function declarations.
//JavaScript engine also moves the function declarations to the top of the script.
//and in this scenario there will be no error but function need to be declared in the old manner, no arrow function or anonnymous function
//arrow or anonnymous function ar belae function declaration ar agey function call korley error dekhabey

//hoist() call from top
/*let x = 20,
y = 10;

let result = add(x, y);  //function declaration ar agey function called but it will work
console.log(result);  //answer will be 30

function add(a, b) {
  return a + b;
}*/

//but now oporer same thing jodi arrow function use korey kori tahley error dibey as the arrow functions aren’t hoisted.
//anonnymous function cann't be hoisted too
/*let x = 20,
y = 10;

let result = add(x, y);
console.log(result);  //answer will be  Cannot access 'add' before initialization

let add=(a, b) =>{
  return a + b;
}*/


//scope chain example

let c=10  //global scope

let add=function (a,b){
    c=c+10; //scope chaining ar through tey c can get its value from global scope
    const result=a+b+c
    
    console.log(result) //result will 30 no error show following the scope chain rules
}
add(5,5)