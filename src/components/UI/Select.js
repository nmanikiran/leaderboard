import { LitElement, html, css } from 'lit-element';
export default class SelectElement extends LitElement {
  constructor() {
    super();
  }
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
  }
  static get styles() {
    return css`
      .c-select {
        background: transparent;
        padding: 1.2rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-size: 1.4rem;
        border-color: rgba(255, 255, 255, 0.2);
        transition: all 120ms ease-out 0s;
        color: inherit;
      }
      .c-select:hover {
        background: var(--darkest);
      }
    `;
  }
  render() {
    return html`<select class="c-select" aria-label="Period">
      <option selected="selected">Sunday, Feb. 23 - Sunday, Feb. 30</option>
    </select>`;
  }
}
customElements.define('my-select', SelectElement);
