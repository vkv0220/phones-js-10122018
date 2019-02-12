import { PhonesCatalogComponent } from './phone-catalog/phone-catalog.component.js';
import { OnePhoneViewComponent } from './one-phone-view/one-phone-view.component.js';
import { PhonesPageService } from './phones-page.service.js';
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component.js";

export class PhonesPageComponent {
  constructor({ element }) {
    this.element = element;
    this._render();

    this._phoneService = new PhonesPageService();


    this._phoneCatalog = new PhonesCatalogComponent({
      element: this.element.querySelector('#catalog'),
      phones: this._phoneService.getAllPhones(),
      onPhoneSelect: (phoneId)=>{
        const phoneDetails = this._phoneService.getPhonesById(phoneId);
        this._phoneCatalog.hide();
        this._phoneViewer.show(phoneDetails);
      },
      onPhoneAdd: (phoneId) => {
        this._cartViewer.addItem(phoneId);
      }
    });

    this._phoneViewer = new OnePhoneViewComponent({
      element: this.element.querySelector('#item'),
      phone: this._phoneService.getPhonesById(),
      onBackPressed: () => {
        this._phoneViewer.hide();
        this._phoneCatalog.show();
      },
        onPhoneAdd: (phoneId) => {
        this._cartViewer.addItem(phoneId);
        }
    });

    this._phoneViewer.hide();

    this._cartViewer = new ShoppingCartComponent({
      element: this.element.querySelector('#shopping-cart'),
    });

  }

  _render() {
    this.element.innerHTML = ` <div class="row">

    <!--Sidebar-->
    <div class="col-md-2">
      <section>
        <p>
          Search:
          <input>
        </p>

        <p>
          Sort by:
          <select>
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </section>

      <section id="shopping-cart">
        
      </section>
    </div>

    <!--Main content-->
    <div class="col-md-10" >
 <div id="catalog"></div>
 <div id="item"></div>

    </div>
  </div>`;
  }
}