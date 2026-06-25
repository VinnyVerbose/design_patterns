import MenuView from './view/MenuView.js';


const menuItems = [
    {name: 'Burger', price: 8.95},
    {name: 'Fries', price: 5.95},
    {name: 'Onion Rings', price: 6.95},
    {name: 'Soda', price: 3.00},
    {name: 'Milk Shake', price: 4.95},
    {name: 'Cheeseburger', price: 10.95},
    {name: 'Bacon Cheeseburger', price: 11.95}
];


const menuView = new MenuView(menuItems);
menuView.renderMenu();