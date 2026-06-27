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
    }

    addMenuItemToOrder(menuItem){
        this.order.addItem(new OrderItem(menuItem));
        this.orderView.render(this.order);
    }
}