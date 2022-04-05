
//remember: A closure gives you access to an outer function’s scope from an inner function
/*function watch(){
    let counter=0
    return function(c){       //here we used anonymous function
        // let counter=0
        counter+=c
        return counter
    }
}

let run1=watch()    //'run1' return hisabey watch function(inner-function) pabey
console.log(run1(2))//output 2  //as return hisabey run1 function paisey so i can call that function by run1()
console.log(run1(2))//output 4 (as counter ar value internally 2 save hoye asey so (2+2))
console.log(run1(2))//output 6 (as counter is a outer function scope and inner function already called 2 times so counter ar value internally 4 save hoye asey so output:4+2=6 when 3rd time inner function is called this happens bcz A closure gives you access to an outer function’s scope from an inner function)


//newly called 
let run2=watch() 
console.log(run2(2))//2 
*/

//Another Example:

/*let accountName=owner=>{
    let balance=0;  //outter function scope

    return deposit=>{      //inner function , here we used arrow function
        balance=balance+deposit
        return balance     //In JS function basically returns only one thing at a time 
    }
}

//here we cann't aaccess outfunction scope but we can use it or access through returned inner function
let totalbalance=accountName('shaik')   //function return hisabey pabo
console.log(totalbalance(10000))  //1st call 
console.log(totalbalance(10000))//2nd call*/
//remember:closure can provide the protection 



// return multiples from function: aikhaney inner hisabey object return kortesey
let accountName=owner=>{
    let amount=0;  //outter function scope and it gonna be protected by closure concept cuz outter function scope cann't be accessed or modified from outside outter function scope can be modified or accessed only by inner function or inner object method

    console.log('account belong to',owner)
    return{
       deposit: (deposit)=>{      
            amount=amount+deposit
            return amount      
        },
        withdraw: (withdraw)=>{
            amount=amount-withdraw
            return amount
        }   
    }
          
}

//outter function call
const accoutBalance=accountName('monir')  //accoutBalance a return hisabey object store hobey so as a result accountBalance is a object type now

//object ar property multiple times access kortey parbo
console.log('Total NEW AMOUNT:',accoutBalance.deposit(500))  
console.log('Total NEW AMOUNT:',accoutBalance.deposit(5000))
console.log('Total NEW AMOUNT:',accoutBalance.deposit(5000))

console.log('Total NEW AMOUNT After withdraw:',accoutBalance.withdraw(5000))



//moral: function return korley statically 1 ta kaj e kora jay but object return korley object ar property r through tey multiple method call kora jay