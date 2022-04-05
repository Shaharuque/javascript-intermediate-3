//(advanced) Callback function and pass different functions
//function ar parameter hisabey function send kora jay and sei function call o kora jay.parameter hisabey kono function a function pathanor por sei parameter hisabey pathano function call kora k boley call back function.

function outer(name,callinginner){
    //console.log(typeof(callinginner)) //function
    //now i can call the inner function from here
    callinginner(name)
}

function inner(name){
    console.log(`hi i am from inner1-${name}`)
}

function inner2(name){
    console.log(`i am ${name} and i am from inner2`)
}

// outer('shaik',inner)  //outer function call and parameter hisabey inner function send
outer('rohim',inner)
outer('Mewao',inner2)


/* array checking
const num=[1,2,3]

if(Array.isArray(num)){
    console.log('yes it is arraay')  
}
else{
    console.log('false')
}*/