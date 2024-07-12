let stock ={
    fruits : ["banana","strawberry","mango"],
    liquid : ["ice","milk"],
    holder : ["cone","cup","stick"],
    toppings:["chocolate","sprinklers"]
}
let ordr =(fruit_name,call_production)=>{
    console.log('order is placed');
    setTimeout(()=>{
       console.log(`${stock.fruits[fruit_name]} has  been selected by the customer`);
       call_production(2);
    }, 2000)
}

let production =(fruit_name)=>{
    
    setTimeout(() => {
        console.log(`${stock.fruits[fruit_name]} has been chopped`);
        setTimeout(() => {
            console.log('machine has started');
            setTimeout(() => {
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} are added`);
                setTimeout(() => {
                    console.log(`${stock.holder[1]}  is customer preferencec`);
                    setTimeout(() => {
                        console.log(`toppin  are ${stock.toppings[0]}`);
                        setTimeout(() => {
                            console.log(`ice cream is served`)
                        }, 3000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 1000);
    }, 2000);
}
// --------------------------------------------- prom


// let order = (time , work)=>{
//      return new Promise((resolve, reject) => {
//        resolve( 
       
//        setTimeout(()=>{
//           console.log(`${stock.fruits[time]} has  been selected by the customer`);
//            work(2);
//        }, 2000))
//      })
// }

// order(4,production)
// .then(()=>{ 
//     console.log('order placed and processing ');
// })
// .catch(error=>{
//     console.log(error);
// })
