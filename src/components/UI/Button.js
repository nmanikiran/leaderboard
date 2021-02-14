import { LitElement, html, css } from 'lit-element';
export default class ButtonElement extends LitElement {
  static get properties() {
    return {
      colorScheme: { type: String }
    };
  }
  constructor() {
    super();
    this.colorClass = '';
  }
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
  }
  static get styles() {
    return css`
      .c-button {
        display: inline-block;
        background: var(--dark);
        border: 0;
        border-radius: 0.4rem;
        padding: 1.2rem 2rem;
        transition: all 120ms ease-out 0s;
        cursor: pointer;
      }
      .c-button--block {
        display: block;
        width: 100%;
      }
      .c-button:hover,
      .c-button:focus {
        filter: brightness(0.9);
      }
      .c-button:focus {
        box-shadow: 0px 0px 0px 0.4rem var(--primary-trans);
      }
      .c-button:active {
        box-shadow: 0px 0px 0px 0.4rem var(--primary-trans),
          inset 0px 0px 0.8rem rgba(0, 0, 0, 0.2);
        filter: brightness(0.8);
      }

      .c-button--primary {
        background: var(--primary);
        color: var(--color);
      }

      .c-button--light {
        background: var(--lightest);
      }

      .c-button--dark {
        background: var(--darkest);
      }

      .c-button--transparent {
        background: transparent;
      }

      .c-button--medium {
        background: var(--medium);
      }

      .c-button--yellow {
        background: var(--yellow);
        color: var(--color);
      }

      .c-button--orange {
        background: var(--orange);
        color: var(--color);
      }

      .c-button--teal {
        background: var(--teal);
        color: var(--color);
      }

      .c-button--light-gradient {
        background: linear-gradient(to top, var(--light), var(--lightest));
      }
    `;
  }
  render() {
    this.colorClass = `c-button--${this.colorScheme}`;

    return html`<button class="c-button ${this.colorClass}">
      <slot></slot>
    </button>`;
  }
}
customElements.define('my-button', ButtonElement);
