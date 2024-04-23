// https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

function getMoneySpent(keyboards, drives, b) {
    let sum = -1; // Initialize sum to -1 in case no combination is affordable
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) { // Changed i<drives.length to j<drives.length
            if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > sum) {
                sum = keyboards[i] + drives[j];
            }
        }
    }
    return sum; // Return the maximum sum found
}