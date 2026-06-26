import OrderItem from '../models/OrderItem.js';

export default class POSController{
    constructor(menuItems, order, menuView){
        this.menuItemButtons = Array.from(document.getElementsByClassName('btnMenuItem'));
        this.menuItems = menuItems
        this.order = order;
        this.menuView = menuView;
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
    }
}