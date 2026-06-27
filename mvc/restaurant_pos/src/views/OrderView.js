export default class OrderView{
    constructor(order){
        this.order = order;
        this.app = document.getElementById('app');
        this.orderElement = Object.assign(document.createElement('div'), { id: 'order' })

        this.app.appendChild(this.orderElement)
    }

    renderOrderItems(items){
        this.orderElement.innerHTML = '';
        console.log(items)
        return items.map(item => {
            console.log(item)
            return `<div class="order-item">
                        <div>${item.menuItem.name}</div>
                        <div>${item.quantity}</div>
                        <button class="btnOrderItemInc" data-id="${item.menuItem.id}">+</button>
                        <button class="btnOrderItemDec" data-id="${item.menuItem.id}">-</button>
                    </div>`
        }).join('');
    }

    renderOrderSummary(){
       return `<div class="order-summary"><strong>Subtotal: ${this.order.getSubtotal().toFixed(2)}</strong></div>
        <div><strong>Tax:</strong> ${this.order.getTax().toFixed(2)}</div>
        <div><strong>TOTAL:</strong> ${this.order.getTotal().toFixed(2)}</div>`
    }

    render(items){
        console.log(this.order.getSubtotal())
        this.orderElement.innerHTML = `
        ${this.renderOrderItems(this.order.orderItems)} 
        ${this.renderOrderSummary()}
        `
    }
}