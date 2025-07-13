

async function addItem(userCart, item) {
    userCart.push(item);    
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if(indexFound === -1){
        console.log("Item não encontrado!");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1; 
        return;
    }

    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
        return;
    }


}

async function calculateTotal(userCart) {
    console.log("\nShopee cart total is:")
    const result = userCart.reduce((total, item ) => total +  item.subtotal(), 0 )
    console.log(`🎁Total: ${result}`);
}

async function dysplayCart(userCart) {
    console.log("Shopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${ item.name } - ${ item.price } | ${ item.quantity }x | Subtotal = ${item.subtotal().toFixed(2) }`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    dysplayCart,
}