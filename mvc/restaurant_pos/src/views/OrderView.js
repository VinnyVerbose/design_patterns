export default class OrderView{
    constructor(orderItems){
        this.orderItems = orderItems;
        this.app = document.getElementById('app');
        this.orderElement = Object.assign(document.createElement('div'), { id: 'order' })

        this.app.appendChild(this.orderElement)
    }

    renderorderItems(){
        return this.orderItems.map(item => {
            return `<div class="order-item">
                        <div>${item.name}</div>
                        <div>${item.price.toFixed(2)}</div>
                        <button class="btnMenuItem" data-id="${item.id}">Add</button>
                    </div>`
        }).join('');
    }

    renderOrder(){
        this.orderElement.innerHTML = this.renderorderItems();
    }
}