let cart = [];
console.log(cart);

const addToCart = document.getElementById("registerNow");
registerNow.addEventListener("click", buyNow);

function buyNow(){  //function
    cart.push("Registered");
    console.log(cart);
}

let d = 2000; //Variable
let e = 22;
let f = d + e;
document.getElementById("intro").innerHTML = f;

console.log(f);