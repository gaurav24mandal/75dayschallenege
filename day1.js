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

/**
 * https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
 * 
 */

function gradingStudents(grades) {
    const res = grades.map(grade => {
        if (grade < 38) {
            return grade; // If the grade is less than 38, no rounding occurs
        } else {
            if ((grade + 2) % 5 === 0) {
                return grade + 2; // Round up by 2 if the remainder is 0 when adding 2
            } else if ((grade + 1) % 5 === 0) {
                return grade + 1; // Round up by 1 if the remainder is 0 when adding 1
            } else {
                return grade; // Otherwise, no rounding occurs
            }
        }
    });
    return res
}