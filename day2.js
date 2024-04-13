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


/**
 * https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
 */
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
       let distanceToCover = x2-x1 ;
       let relavtiveSpeed = v1-v2 ;
   if(v2>v1){
       return "NO"
   }
   else if(distanceToCover%relavtiveSpeed != 0){
       return "NO"
   }
   else{
       const noOfJumps = distanceToCover/relavtiveSpeed;
       if(v1*noOfJumps+x1 === v2*noOfJumps+x2){
           return "YES"
       }
       return "NO"
       }
   }
 