// /**
//  * https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true
//  */

// function dayOfProgrammer(year) {
//     // Write your code here
//     if(year<1918){
//         if(year %4 === 0){
//         return `12.09.${year}`
//     }
//     else{
//         return `13.09.${year}`
//     }
//   }
//   else if(year === 1918){
//        return `26.09.1918`
//   }
//   else{
//       if(year%400 ===0 ||year %4===0 && year%100 !==0){
//           if(year %4 === 0){
//         return `12.09.${year}`
//     } 
//       }
//       else{
//         return `13.09.${year}`
//     }
//   }
// }

const arraySum = (arr)=>{
    let total = 0
     arr.forEach((i)=>{
           total += i ;
    })
    return total
}

arr = [1,2,3,5]

console.log(arraySum(arr));