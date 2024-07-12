// -------------------------------promisies-------------------------------------------------------------------------     
let stock ={
    fruits : ["banana","strawberry","mango"],
    liquid : ["ice","milk"],
    holder : ["cone","cup","stick"],
    toppings:["chocolate","sprinklers"]
}

let order =(time,work)=>{
     let isOpen = true;
    return new Promise((resolve, reject) => {
        if(isOpen){
            setTimeout(()=>{
              resolve(work())
              
            }, time)
        }
        else{
            reject(
                console.log(" shop is  closed")
            )
        }
    })
}
order(1000,()=>{
    console.log('order is placed');
})      
.then(()=>{
    return order(1000,()=>{console.log(`${stock.fruits[1]} is choose by customer`);})
})
.then(()=>{
    return order(3000,()=>{console.log('machine has started');
        ;})
})
.then(()=>{
    return order(2000,()=>{console.log(`${stock.liquid[0]} and ${stock.liquid[1]} are added`);})
})
.then(()=>{
    return order(3000,()=>{console.log(`ice cream placed on ${stock.holder[1]}`)})
})
.then(()=>{
    return order(2000, () => console.log("serve ice cream"));
})
.catch((err)=>{
    console.log('customer is away');
})