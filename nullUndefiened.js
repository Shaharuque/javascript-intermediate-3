//35-4 Null Vs Undefined, different ways you will get undefined

/*when we can get undefined
1.varible value not assigned
2.function but did not write return
3. return nothing(returnable function)
4.parameter isn't passed to function
5.property that doesn't exist in the object but want to access that property gives undefined
6.explicitly set value to undefined gives undefined 
*/ 

/*let sum=(a,b)=>{
    const  result=a+2
    console.log(b)
    return result
}

sum(4)

const arr=[1,2,3]
console.log(arr[5])//gives undefined*/

//-------------------------Null---------------
//explicitly we can set ,object ar kono property null likhtey pari for the sake of work
const employee={name:null,email:null}
console.log(employee.name)
employee.name="shaik"
console.log(employee.name,employee.email)