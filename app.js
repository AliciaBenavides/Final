let cart = [];
console.log(cart);

const addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", buyNow);

function buyNow(){  //function
    cart.push("superstar");
    console.log(cart);
}



const shoe = {type:"Superstar", year:"2022", color:"white"}; //object with properties
    console.log(shoe);


