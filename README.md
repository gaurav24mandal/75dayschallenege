# 75dayschallenege
solving  hackerank  questions

what i learn today :   dont use  foreach method in array if  u want to do changes  in array and return new  item in array as  foreach does support  return keyword 
instead  use  map  method  

example 
arr =[1,2,3,]
arr.forEach((i)=>{
    if(i%2 == 0){
        return  i 
    }
    else{
     return i+1 
    }
})

The return statement inside a forEach loop doesn't have the effect you might expect. It doesn't affect the iteration of the loop in any way, nor does it allow you to return a value from the loop.


const arr = [1, 2, 3];

const transformedArray = arr.map((i) => {
    if (i % 2 === 0) {
        return i;
    } else {
        return i + 1;
    }
});

console.log(transformedArray);
 instead  use map  method 



/**
 * to count  each element  of array 
 */

const countElement = (arr)=>{
    let count ={};
    arr.forEach((elem)=>{
         if(count[elem]){
            count[elem]++
         }
         else{
            count[elem] = 1;
         }
         
    })
    return count
}
let arr = [1,2,3,4,5,1,2,3,5,1,2]

const ans = Object.values(countElement(arr))
console.log(ans);