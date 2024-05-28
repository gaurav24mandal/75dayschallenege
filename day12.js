/**
 * Write a program to find x to the power n (i.e. x^n). Take x and n from the user. You need to return the answer.

Do this recursively.
 */

function power(x,n){
    if(n ===1){
        return x;
    }
    else{
        return x*power(x,n-1);
    }
}

console.log(power(2,4));

