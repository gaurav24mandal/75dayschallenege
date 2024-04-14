/**
 * https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
 */
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count =0  ;
       
    for(let i =0 ;i<n;i++){
        for(let j=i+1;j<n;j++){
          if((ar[i]+ar[j])%k ===0){
              count++
            }
        }
    }
    return count
}
/**
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
 */
function birthday(s, d, m) {
    let count = 0;
    // Write your code here
    for (let i = 0; i <= s.length - m; i++) {
        let sum = s[i];
        for (let j = i + 1; j < i + m; j++) {
            sum += s[j];
        }
        if (sum === d) {
            count++;
        }
    }
    return count;
}