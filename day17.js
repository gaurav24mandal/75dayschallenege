//reverse words
function reverse(s){
  let res =  s.split(" ")
  let ans ;
    for(let i of res){
        ans =  i.split('')
      let final=  ans.reverse();
       let ansfinal=  final.toString();
         
          console.log( ansfinal.toString());
    }
    
}
reverse("gaurav mandal is a giid")
