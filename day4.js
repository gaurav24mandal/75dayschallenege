/**
 * https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true
 */

function dayOfProgrammer(year) {
    // Write your code here
    if(year<1918){
        if(year %4 === 0){
        return `12.09.${year}`
    }
    else{
        return `13.09.${year}`
    }
  }
  else if(year === 1918){
       return `26.09.1918`
  }
  else{
      if(year%400 ===0 ||year %4===0 && year%100 !==0){
          if(year %4 === 0){
        return `12.09.${year}`
    } 
      }
      else{
        return `13.09.${year}`
    }
  }
}
/**
 * https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
 */
function bonAppetit(bill, k, b) {
    let  total=0;
        bill.forEach((item)=>{
           return total += item  ;
        })
      
       let  billActual = total-bill[k]
        
        if(billActual/2 === b){
            console.log('Bon Appetit')
        }
        else{
            console.log(`${b-billActual/2}`)
            }
  
  }