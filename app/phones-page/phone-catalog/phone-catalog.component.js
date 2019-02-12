import { BaseComponent } from '../../common/components/base/base.component.js';

export class PhonesCatalogComponent extends BaseComponent {
  constructor({ element, phones, onPhoneSelect, onPhoneAdd }) {
    super({ element });
    this.phones = phones;
    this.onPhoneSelect = onPhoneSelect;
    this.onPhoneAdd = onPhoneAdd;
    this._render();
    this._element.addEventListener('click', this._handleClick.bind(this));
  }

  _handleClick({ target }) {
    const liElement = target.closest('.thumbnail');
    const linkToDetails = target.closest('.thumb>img');
    const linkToDetailsByName = target.closest('.phone-name');
    const btnAddCart = target.closest('.btn');
    if (!linkToDetails && !linkToDetailsByName && !btnAddCart) {
      return;
    }
    if (target === btnAddCart) {
          this.onPhoneAdd(liElement.querySelector('.phone-name').innerText);
          //btnAddCart.classList.add('btn-success');
    }
    if (target === linkToDetails || target === linkToDetailsByName) {
        this.onPhoneSelect(liElement.dataset.id);
    }
  }

  _render() {
    this._element.innerHTML = `
          <ul class="phones">
          ${this.phones.reduce((html, phone) => {
      return `${html}     <li class="thumbnail" data-id=${phone.id}>
          <a href="#!/phones/${phone.id}" class="thumb">
            <img alt=${phone.id} src=${`assets/${phone.imageUrl}`}>
          </a>
          <div class="phones__btn-buy-wrapper">
            <a class="btn btn-success">
              Add
            </a>
          </div>
          <a href="#!/phones/${phone.id}" class="phone-name">${phone.name}</a>
          <p>${phone.snippet}</p>
        </li>`
    }, '')}
   
      </ul>
    `
  }
}