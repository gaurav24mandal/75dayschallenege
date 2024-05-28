/**
 * Problem statement
You are given a number 'n'.



Return number of digits in ‘n’.



Example:
Input: 'n' = 123

Output: 3

Explanation:
The 3 digits in ‘123’ are 1, 2 and 3. 
 */

function count (n){
 
 if(n/10 === 0){
    return 1 ;
 }
 else{
    return count(n/10)+1;
 }
}

//console.log(count(123));

/**
 * Given the number 'n', write a code to print numbers from 1 to n in increasing order recursively.
 */

function  print(n){
    if(n===1){
        return 1
    }
    else{
      return  print(n-1) + " "+ n;
         

    }
}

console.log(print(5));