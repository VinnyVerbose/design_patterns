export default class MenuView{
    constructor(menuItems){
        this.menuItems = menuItems;
        this.app = document.getElementById('app');
        this.menuElement = Object.assign(document.createElement('div'), { id: 'menu' })

        this.app.appendChild(this.menuElement)
    }

    renderMenuItems(){
        return this.menuItems.map(item => {
            return `<div>${item.name}</div>
                    <div>${item.price}</div>
                    <button>Add</button>`
        }).join('');
    }

    renderMenu(){
        this.menuElement.innerHTML = this.renderMenuItems();
    }
}