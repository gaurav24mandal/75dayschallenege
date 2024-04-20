// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true
function countingValleys(step, path) {
    let altitude = 0;
    let valleys = 0;
    let inValley = false;
    
    for (let step of path) {
        if (step === 'U') {
            altitude++;
        } else {
            altitude--;
        }
        
        if (altitude < 0 && !inValley) {
            inValley = true;
        }
        if (altitude === 0 && inValley) {
            valleys++;
            inValley = false;
        }
    }
    
    return valleys;
}