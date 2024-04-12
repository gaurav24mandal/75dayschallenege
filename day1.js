/** easy
 * question 1 stircase 
 * https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true 
 * 
 *             #
              ##
             ###
            ####
           #####
          ######

 */



function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let stair = '';

        // Add spaces
        for (let s = 0; s < n - i; s++) {
            stair += ' ';
        }

        // Add hashes
        for (let j = 0; j < i; j++) {
            stair += '#';
        }

        console.log(stair);
    }
}


/** question2
 * https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=false
 * 
 * 
 */
function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b)=> a-b);
    let sumO = 0 ;
    let sumT = 0
    for(let i = 0 ; i<arr.length-1 ; i++){
        sumO += arr[i];
        }
    for( let i =1;i< arr.length;i++ ){
         sumT += arr[i]
    }
   console.log(`${sumO} ${sumT}`)
}

/**
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
 */
function birthdayCakeCandles(candles) {
    // Write your code here
     const max =   Math.max(...candles)
     let count = 0
     candles.map((e)=>{
         if(e === max){
             count++;
         }
     })
     return count
}