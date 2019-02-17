import { BaseComponent } from '../../common/components/base/base.component.js';

export class ShoppingCartComponent extends BaseComponent {
    constructor({ element}) {
        super({ element });
        this._items = {};
        this._render();
        this.on('click', '.remove', (event) => {
            this.removeItem(event.delegateTarget.dataset.id);
        })
    }

    // _handleClick({ target }) {
    //     const btnDelete = target.closest('.remove');
    //     if (!btnDelete) {
    //         return;
    //     }
    //     this.removeItem(btnDelete.dataset.id);
    //
    // }

    addItem(phoneID) {
        if(!this._items[phoneID]) {
            this._items[phoneID] = 0;
        }
        this._items[phoneID] += 1;
        this._render();

        // const list = this._element.querySelector('ul');
        // let itemAdded = document.createElement('li');
        // itemAdded.innerHTML = `${phoneID} <span>✘</span>`;
        // list.appendChild(itemAdded);
    }

    removeItem(phoneID) {
        this._items[phoneID] -= 1;
        if(this._items[phoneID] === 0) {
            delete this._items[phoneID];
        }
        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <p>Shopping Cart</p>
        <ul>
        ${Object.entries(this._items).reduce((html, [phoneID, quantity]) => {
            return `${html} ${phoneID} (${quantity})
            <button class="remove" data-id="${phoneID}">✘</button>`
            }, 
            '')}
        </ul>
    `};
}