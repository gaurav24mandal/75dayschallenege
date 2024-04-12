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
