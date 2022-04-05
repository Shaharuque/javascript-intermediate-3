

function passByReference(myObj){
    // myObj.name='korim'
    myObj=8
}

// const myObj={name:'shaik',id:01,age:42}
// passByReference(myObj)
// console.log(myObj)  //output will be:{ name: 'korim', id: 1, age: 42 } here, we can see name properties value has changed bcz object is non-primitive type and this is called pass-by-reference

const myObj=7
passByReference(myObj)
console.log(myObj)//output will be 7 here we can see myObj value has not change tho we changed inside function its bcz Number is primitive data type
