class CartItem {
    constructor(quantity, productTitle, productPrice, total, pushToken){
        this.quantity = quantity;
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.total = total;
        this.pushToken = pushToken
    }
}

export default CartItem;