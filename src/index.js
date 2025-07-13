import * as cartService from './services/cart.js';
import createItem from "./services/item.js";

console.log("Welcome to the your shopee cart!");

const myCart = [];
const myWhishList = [];

const item = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels corvete", 39.99, 3);

await cartService.addItem(myCart, item);
await cartService.addItem(myCart, item2);
await cartService.removeItem(myCart, item);
await cartService.calculateTotal(myCart);
await cartService.dysplayCart(myCart);
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item.name);

