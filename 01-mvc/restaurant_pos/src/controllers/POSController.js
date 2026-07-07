import OrderItem from '../models/OrderItem.js';
import OrderView from '../views/OrderView.js';

export default class POSController{
    constructor(menuItems, order, menuView, orderView){
        this.menuItemButtons = Array.from(document.getElementsByClassName('btnMenuItem'));
        this.menuItems = menuItems
        this.order = order;
        this.menuView = menuView;
        this.orderView = orderView;
        this.initEventListeners();
    }

    initEventListeners(){
        this.menuItemButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const menuItem = this.menuItems.find(item=> item.id === Number(e.target.dataset.id));
                if(!menuItem) return;

                this.addMenuItemToOrder(menuItem);
            })
        });

        this.orderView.orderElement.addEventListener('click', (e) => {
            if(e.target.classList.contains('btnOrderItemInc')){
                this.order.orderItems.find(item => item.id === e.target.dataset.id).incrementQuantity();
                this.orderView.render();
            }

            if(e.target.classList.contains('btnOrderItemDec')){
                this.order.orderItems.find(item => item.id === e.target.dataset.id).decrementQuantity();
                this.orderView.render();
            }

            if(e.target.classList.contains('btnPurchase')){
                this.orderView.renderReceipt();
            } else if(e.target.classList.contains('btnClose')){
                location.reload();
            }
        })
    }

    addMenuItemToOrder(menuItem){
        this.order.addItem(new OrderItem(menuItem));
        this.orderView.render();
    }
}