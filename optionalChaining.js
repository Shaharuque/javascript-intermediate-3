const car={
    color:'red',
    price:1200,
    features:{
        wheels:4,
        rim:5,
        speed:true
    },
    car1:{
        name:'BMW',
        price:10000,
        speed:'1200mpz',
        drive: function(){
            return 'i am driving car1'
        }
    }
}
//const result=car.features.wheels

const result=car?.features?.color//jodi car exists korey tahley tar feature property thakley access korbo and jodi feature property exists korey then feature ar vitor color property thakaley seita return hobey otherwise color na thakley undefine returned hobey kono error show hobey na
//optional chaining is very useful when we work with anonymous data,fetching data from third party API etccc
console.log(result) //output: undefined

const newCar=car?.car5?.speed
console.log(newCar) //output: undefined

//if i use any method from object
console.log(car?.car1?.drive?.()) //drive?.()=> means if drive is a function then call it otherwise return undefine

//new thing: ??
//The nullish coalescing operator ( ?? ) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand
const carMade=car?.made?.year ?? 'car making year is not found' //here lefthand side will return undefine so right side will be stored into carMade 
console.log(carMade)

