import { LitElement, html, css } from 'lit-element';
import './ListItemMedia';

const randomEmoji = () => {
  const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯'];
  let randomNumber = Math.floor(Math.random() * emojis.length);
  return emojis[randomNumber];
};

export default class ListItem extends LitElement {
  static get properties() {
    return {
      member: { type: Object }
    };
  }
  constructor() {
    super();
    this.member = {};
  }

  static get styles() {
    return css`
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

      .c-place.rank-1 {
        background: var(--yellow) !important;
        color: var(--darkest) !important;
      }
      .c-place.rank-2 {
        background: var(--teal) !important;
        color: var(--darkest) !important;
      }
      .c-place.rank-3 {
        background: var(--orange) !important;
        color: var(--darkest) !important;
      }

      .c-flag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3.2rem;
        height: 3.2rem;
        background: transparent;
        color: var(--dark);
        border-radius: 0.4rem;
      }

      .c-kudos {
        text-align: right;
        padding-top: 0.8rem;
      }
      .c-kudos .rank-1 {
        color: var(--yellow) !important;
      }
      .c-kudos .rank-2 {
        color: var(--teal) !important;
      }
      .c-kudos .rank-3 {
        color: var(--orange) !important;
      }
      @media screen and (max-width: 700px) {
        .c-flag {
          width: 2.4rem;
          height: 2.4rem;
        }
        .c-place {
          transform: translateY(4px);
        }
        .c-list__grid {
          grid-template-columns: 3.2rem 3fr 1fr;
          grid-column-gap: 0.8rem;
        }
        .c-list__item .c-flag {
          margin-top: 0.4rem;
        }
      }
    `;
  }
  render() {
    return html`
      <li class="c-list__item" role="listitem">
        <div class="c-list__grid">
          <div class="c-flag c-place ${this.member.className}">
            ${this.member.rank}
          </div>
          <list-item-media .member="${this.member}"></list-item-media>
          <div class="c-kudos ">
            <strong class="${this.member.className}">
              ${this.member.kudos}
            </strong>
            ${randomEmoji()}
          </div>
        </div>
      </li>
    `;
  }
}
customElements.define('list-item', ListItem);
