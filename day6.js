/**
 * https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true
 */

function pageCount(n, p) {
    // Write your code here
    if(p ===1||p ===n){
        return 0;
    }
    else if(p<=n/2 ){
        return Math.floor( p/2)
    }
     else if(p>n/2 && n%2 ===0 && p === n-1){
         return 1;
    }
    else if (p>n/2  && n%2==0){
         return Math.floor((n-p)/2)
    }
    else if(p>n/2 && n%2 !==0 && p === n-1){
         return 0;
    }
   
    else{
         return Math.floor((n-p)/2)
    }

}
