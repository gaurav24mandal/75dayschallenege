/**https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
 * 
 * 
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleDistancce =  apples.map((i)=>i+a);
    let orangeDistance = oranges.map((i)=>i+b) ;
   
    let oragangesAtHome  = orangeDistance.filter((i)=>{
         return i>=s&&i<=t
    })
    let appleAtHome = appleDistancce.filter((i)=>{
        return i>=s&&i<=t
    })
   console.log(`${appleAtHome.length}\n${oragangesAtHome.length}`)
}
