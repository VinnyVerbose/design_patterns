import MenuView from './views/MenuView.js';
import MenuItem from './models/MenuItem.js';
import POSController from './controllers/POSController.js';
import Order from './models/Order.js'; 
import OrderView from './views/OrderView.js';

const menuItemData = [
    {name: 'Burger', price: 8.95, id: 1},
    {name: 'Fries', price: 5.95, id: 2},
    {name: 'Onion Rings', price: 6.95, id: 3},
    {name: 'Soda', price: 3.00, id: 4},
    {name: 'Milk Shake', price: 4.95, id: 5},
    {name: 'Cheeseburger', price: 10.95, id: 6},
    {name: 'Bacon Cheeseburger', price: 11.95, id: 7}
];


function createMenuItems(menuItemsDataArray){
    return menuItemsDataArray.map(item => {
        return new MenuItem(item);
    });
}

const menuItems = createMenuItems(menuItemData);
const menuView = new MenuView(menuItems);

menuView.renderMenu();

const order = new Order();
const orderView = new OrderView(order);
const posController = new POSController(menuItems, order, menuView, orderView);