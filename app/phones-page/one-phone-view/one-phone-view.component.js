import { BaseComponent } from '../../common/components/base/base.component.js';

export class OnePhoneViewComponent extends BaseComponent{
  constructor ({element, phone, onBackPressed, onPhoneAdd}) {
        super(phone);
        this._element = element;
        this.onBackSelect = onBackPressed;
        this.onPhoneAdd = onPhoneAdd;
        this.phone = phone;
        this._render();
        // super.show();
        this._element.addEventListener('click', this._handleClickBack.bind(this));
  }

  _handleClickBack(event) {
      const backButton = this._element.querySelectorAll('button')[0];
      const phoneThumbs = this._element.querySelectorAll('.phone-thimbs');
      if (event.target.tagName != 'BUTTON' && event.target.tagName != 'IMG') return;
      if (event.target === backButton)this.onBackSelect();
      if (event.target.closest('img')) {
          this._element.querySelector('.phone').src = event.target.closest('img').src;
      }
      if (event.target === this._element.querySelectorAll('button')[1]) {
          this.onPhoneAdd(this.phone.name);
      }
  }

  _render() {
    this._element.innerHTML = `
    <img class="phone" src="assets/${this.phone.images[0]}">

    <button>Back</button>
    <button>Add to basket</button>

    <h1>${this.phone.name}</h1>
    <p>${this.phone.description}</p>

    <ul class="phone-thumbs">
       ${this.phone.images.reduce((item, next) => {
        return `${item} <li><img src="assets/${next}"></li>`;
        },'')}
    </ul>

    <ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>Availability</dt>
          ${this.phone.availability.map((item)=> `<dd>${item}</dd>`).join('')}
        </dl>
      </li>
      <li>
        <span>Battery</span>
        <dl>
          <dt>Type</dt>
          <dd>${this.phone.battery.type}</dd>
          <dt>Talk Time</dt>
          <dd>${this.phone.battery.talkTime}</dd>
          <dt>Standby time (max)</dt>
          <dd>${this.phone.battery.standbyTime}</dd>
        </dl>
      </li>
      <li>
        <span>Storage and Memory</span>
        <dl>
          <dt>RAM</dt>
          <dd>${this.phone.storage.ram}</dd>
          <dt>Internal Storage</dt>
          <dd>${this.phone.storage.flash}</dd>
        </dl>
      </li>
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd></dd>
          <dt>WiFi</dt>
          <dd>${this.phone.connectivity.wifi}</dd>
          <dt>Bluetooth</dt>
          <dd>${this.phone.connectivity.bluetooth}</dd>
          <dt>Infrared</dt>
          <dd>${Boolean(this.phone.connectivity.infrared) ? '✓' : '✘' }</dd>
          <dt>GPS</dt>
          <dd>${Boolean(this.phone.connectivity.gps) ? '✓' : '✘'}</dd>
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd>${this.phone.android.os}</dd>
          <dt>UI</dt>
          <dd>${this.phone.android.ui}</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          ${this.phone.sizeAndWeight.dimensions.map((item)=> `<dd>${item}</dd>`).join('')}
          <dt>Weight</dt>
          <dd>${this.phone.sizeAndWeight.weight}</dd>
        </dl>
      </li>
      <li>
        <span>Display</span>
        <dl>
          <dt>Screen size</dt>
          <dd>${this.phone.display.screenSize}</dd>
          <dt>Screen resolution</dt>
          <dd>${this.phone.display.screenResolution}</dd>
          <dt>Touch screen</dt>
          <dd>${Boolean(this.phone.display.touchScreen) ? '✓' : '✘'}</dd>
        </dl>
      </li>
      <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd>${this.phone.hardware.cpu}</dd>
          <dt>USB</dt>
          <dd>${this.phone.hardware.usb}</dd>
          <dt>Audio / headphone jack</dt>
          <dd>${this.phone.hardware.audioJack}</dd>
          <dt>FM Radio</dt>
          <dd>${Boolean(this.phone.hardware.fmRadio) ? '✓' : '✘'}</dd>
          <dt>Accelerometer</dt>
          <dd>${Boolean(this.phone.hardware.accelerometer) ? '✓' : '✘'}✓</dd>
        </dl>
      </li>
      <li>
        <span>Camera</span>
        <dl>
          <dt>Primary</dt>
          <dd>${this.phone.camera.primary}</dd>
          <dt>Features</dt>
          <dd>${this.phone.camera.features}</dd>
        </dl>
      </li>
      <li>
        <span>Additional Features</span>
        <dd>${this.phone.additionalFeatures}</dd>
      </li>
    </ul>
    `
  }
}