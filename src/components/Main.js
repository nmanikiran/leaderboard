import { LitElement, html, css } from 'lit-element';
import './ListItem';
import './UI/Select';

import { cardStyles } from './../styles';

export default class MainElement extends LitElement {
  static get properties() {
    return {
      team: { type: Array }
    };
  }
  constructor() {
    super();
    this.team = [];
  }

  static get styles() {
    return [
      cardStyles,
      css`
        .c-card__body,
        .c-card__header {
          padding: 2.4rem;
        }
        .c-list {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
        .c-list__item {
          padding: 1.6rem 0;
        }
        .c-list__item .c-flag {
          margin-top: 0.8rem;
        }

        .c-list__grid {
          display: grid;
          grid-template-columns: 4.8rem 3fr 1fr;
          grid-column-gap: 2.4rem;
        }

        .u-text--right {
          text-align: right;
        }

        .c-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0;
        }
        @media screen and (max-width: 700px) {
          .c-card__header {
            flex-direction: column;
          }
        }
      `
    ];
  }
  render() {
    return html`
      <div class="l-grid__item">
        <div class="c-card">
          <div class="c-card__header">
            <h3>Received Kudos</h3>
            <my-select> </my-select>
          </div>
          <div class="c-card__body">
            <ul class="c-list" role="list">
              <li class="c-list__item" role="listitem">
                <div class="c-list__grid">
                  <div class="u-text--left">Rank</div>
                  <div class="u-text--left">Team Member</div>
                  <div class="u-text--right"># of Kudos</div>
                </div>
              </li>
              ${this.team.map(
                (member) => html`<list-item .member="${member}"></list-item>`
              )}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('main-element', MainElement);
