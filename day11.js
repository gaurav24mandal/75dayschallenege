function recus(n) {
    console.log(n); // Print the value of n
    if (n === 1) {
        return 1;
    } else {
        return recus(n - 1);
    }
}

//recus(10);

// recursion 

function mul(n){
    if(n ==1){
        return n;
    }
    else{
        return n+ mul(n-1);
    }
}

console.log(mul(4));