/***
 * https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true
 */

function sockMerchant(n, ar) {
    // Create an object to store the count of each color
    const colorCount = {};
    
    // Iterate through the array of socks and update the count of each color
    ar.forEach(color => {
        colorCount[color] = (colorCount[color] || 0) + 1;
    });
    
    // Calculate the number of pairs for each color and sum them up
    let totalPairs = 0;
    for (const count of Object.values(colorCount)) {
        totalPairs += Math.floor(count / 2);
    }
    
    return totalPairs;
}