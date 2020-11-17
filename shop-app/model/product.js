class Product {
    constructor(id, ownerId, title, imageURL, description, price, productPushToken){
        this.id = id;
        this.ownerId = ownerId;
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
        this.productPushToken = productPushToken
    }
}

export default Product;