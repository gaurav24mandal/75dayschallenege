function recus(n){
    if(n ===1){
        return 1;
    }else{
       return recus(n-1);
    }
}

console.log(recus(10));