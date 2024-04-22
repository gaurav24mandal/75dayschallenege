// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

function catAndMouse(x, y, z) {
    let catA = Math.abs(x-z);
    let catb = Math.abs(y-z);
    if(catA === catb){
        return 'Mouse C'
        }
        else{
            
            let dis =  Math.min(catA,catb)
    
           if(dis ===catb){
            return 'Cat B'
        }
          else if(dis === catA){
              return 'Cat A'
    }
  
  }
        }