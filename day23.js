let stock ={
    fruits : ["banana","strawberry","mango"],
    liquid : ["ice", "water","milk"],
    holder : ["cone","cup","stick"],
    toppings:["chocolate","sprinklers"]
}
let ordr =(fruit_name,call_production)=>{
    console.log('order is placed');
    setTimeout(()=>{
       console.log(`${stock.fruits[fruit_name]} has  been selected by the customer`);
       call_production();
    }, 2000)
}

let production =()=>{
    console.log('start production.');
}

ordr(0,production)
