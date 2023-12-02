let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shop_open = true;

let choice=()=>{
    return Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("which topping do you want to added?"))
        },3000);
    });
}

 async function kitchen() {
    console.log("A")
    console.log("B")
    console.log("C")

    await choice()

    console.log("D")
    console.log("E")
 }

 kitchen();
 console.log("cleaning dishes");
 console.log("cleaning th tables")
 console.log("taking the dishes")