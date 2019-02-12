import { BaseComponent } from '../../common/components/base/base.component.js';

export class ShoppingCartComponent extends BaseComponent {
    constructor({ element}) {
        super({ element });
        this._render();
        this._element.addEventListener('click', this._handleClick.bind(this))
    }

    _handleClick({ target }) {
        const spanElement = target.closest('span');
        if (!spanElement) return;
        const liElement =  spanElement.parentNode;
        liElement.parentNode.removeChild(liElement);
    }

    addItem(item) {
        const list = this._element.querySelector('ul');
        let itemAdded = document.createElement('li');
        itemAdded.innerHTML = `${item} <span>✘</span>`;
        list.appendChild(itemAdded);
    }

    _render() {
        this._element.innerHTML = `
        <p>Shopping Cart</p>
        <ul>
          <li>Phone 1 <span>✘</span></li>
          <li>Phone 2 <span>✘</span></li>
          <li>Phone 3 <span>✘</span></li>
        </ul>
    `};
}