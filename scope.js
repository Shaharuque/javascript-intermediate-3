//Block scope, global scope, Hoisting

const num=27 //global scope varible

let sum=(a,b)=>{
    console.log(num) //as num declared in a global scope
    if(a==b){
        const c=40
        //console.log(c) //ok
    }
    console.log(c)// can't be accessed as c declared in a block scope (let and const ar jnno) but var ar jnno block scope boley kicho nai
    return a+b
}

const result=sum(5,5)
//console.log(a) //a cann't be console log as it declared in a local scope
//console.log(num) //as num declared in a global scope

//global can be used in every where but local cann't