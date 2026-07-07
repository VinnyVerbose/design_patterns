export default class OrderItem{
    constructor(menuItem){
        this.menuItem = menuItem;
        this.quantity = 1;
        this.modifier = '';
        this.id = crypto.randomUUID();
    }

    incrementQuantity(){
        this.quantity++;
    }

    decrementQuantity(){
        this.quantity--;

        if(this.quantity <= 0){
            this.quantity = 0;
        }
    }

    getLineTotal(){
        return this.quantity * this.menuItem.price;
    }

    editModifier(text){
        this.modifier = text;
    }
}