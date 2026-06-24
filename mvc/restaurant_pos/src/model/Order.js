class Order{
    constructor(){
        this.orderItems = [];
    }

    addItem(orderItem){
        this.orderItems.push(orderItem);
    }

    removeItem(itemName){
        this.orderItems = this.orderItems.filter(item => item.menuItem.name !== itemName);
    }

    getSubtotal(){
        return this.orderItems.reduce((acc, item) => {
            return acc + item.getLineTotal();
        }, 0);
    }

    getTax(){
        return this.getSubtotal() * 0.07;
    }

    getTotal(){
        return this.getSubtotal() + this.getTax();
    }
}