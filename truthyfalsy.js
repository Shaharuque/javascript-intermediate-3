// --------Truthy------------
/*// const x=2
// const x="shaaik"
// const x="0" any positive or negative number or string or only single white space or empty array{} or empty object will show truthy 
//const x=true  */

//-------falsy------------
//const x=0       //for 0 value of x will show falsy
//const x=""        //for empty string will show falsy
//const x=false       //false is also falsy
// let x           
// console.log(x)        //undefine is also falsy 
//const x=null             //null is falsy

let x=parseInt('shaaik')
console.log(x)       //will show NaN and NaN is falsy as well

if(x){    //using this 'truthy falsy' concept i don't need to write if(x=="") menas if x== null then do something i can simply write if(x){do something}
    console.log('truthy')
}
else{
    console.log('falsy')
}