export default class MenuView{
    constructor(menuItems){
        this.menuItems = menuItems;
        this.app = document.getElementById('app');
        this.menuElement = Object.assign(document.createElement('div'), { id: 'menu' })

        this.app.appendChild(this.menuElement)
    }

    renderMenuItems(){
        return this.menuItems.map(item => {
            return `<div class="menu-item">
                        <div>${item.name}</div>
                        <div>${item.price.toFixed(2)}</div>
                        <button class="btnMenuItem" data-id="${item.id}">Add</button>
                    </div>`
        }).join('');
    }

    renderMenu(){
        this.menuElement.innerHTML = this.renderMenuItems();
    }
}