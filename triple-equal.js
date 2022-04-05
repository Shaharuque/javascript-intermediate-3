//double equal (==) vs triple equal (===), implicit conversion
//== (double equal)
//== only checks value is equal or not but it doesn;t check its type ,type doesn;t matter here
//in JS true=1,false=0
const i=2
const j='2'

if(i==j){
    console.log('i and j same ') //here,it will be the result
}
else{
    console.log('i and j is not same')
}

//-----------------
//===(triple equal)
//===  checks value is equal or not and it also check its type is same or not
/*const a=2
const b='2'
if(a===b){
    console.log('a and b same ')
}
else{
    console.log('a and b is not same')//here,it will be the result
}*/

/*const a=5
const b='6'
if(a<b){
    console.log('b is greater')      //here a is number but b is string ,in JS implicitly b converted to a number then the comparasion is done
}
else{
    console.log('a is greater')
}*/
//---------------------
// let sum=(a,b)=>{
//     let res=a+b
//     console.log(res)
// }
// sum(5,'5')


//-------Moral Of the lesson here--------------
//In JS, string can be implicitly(internally ) converted into Number then comparasion is done