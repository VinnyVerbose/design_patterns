export default class Order{
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
        let subtotal =  this.orderItems.reduce((acc, item) => {
            return acc + item.getLineTotal();
        }, 0);

        return subtotal;
    }

    getTax(){
        return (this.getSubtotal() * 0.07);
    }

    getTotal(){
        return (Number(this.getSubtotal()) + Number(this.getTax()));
    }
}