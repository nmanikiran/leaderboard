import { LitElement, html, css } from 'lit-element';
import './UI/Button';

export default class HeaderElement extends LitElement {
  sendKudos() {
    alert('Send Kudos to');
  }
  static get styles() {
    return css`
      .c-logo {
        display: inline-block;
        width: 100%;
        max-width: 17.6rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
      }
      .c-header {
        padding: 1.6rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.4rem;
        position: relative;
      }
      .c-header:before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: 0.2rem;
        background: var(--primary-trans);
      }
    `;
  }
  render() {
    return html`
      <div class="c-header">
        <img
          class="c-logo"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/km-logo-color.svg"
          draggable="false"
          loading="lazy"
          alt="kudos"
        />
        <my-button colorScheme="primary" @click="${this.sendKudos}">
          Send Kudos
        </my-button>
      </div>
    `;
  }
}
customElements.define('header-element', HeaderElement);
