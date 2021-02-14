import { LitElement, html, css } from 'lit-element';
import { AvatarStyles } from './../../styles';

export default class ListItemMedia extends LitElement {
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
    return [
      AvatarStyles,
      css`
        a {
          color: var(--orange);
          text-decoration: none;
          transition: all 120ms ease-out 0s;
          display: inline-block;
          border-radius: 0.4rem;
        }
        a:hover {
          background: var(--primary-trans);
          color: var(--primary-light);
          box-shadow: 0px 0px 0px 0.4rem var(--primary-trans);
        }

        .c-media {
          display: inline-flex;
          align-items: center;
        }
        .c-media__content {
          padding-left: 1.6rem;
        }
        .c-media__title {
          margin-bottom: 0.4rem;
        }
        .c-media__link {
          font-size: 1.4rem;
        }

        @media screen and (max-width: 700px) {
          .c-media__content {
            padding-left: 0.8rem;
          }
          .c-media__title {
            font-size: 1.4rem;
          }
        }
      `
    ];
  }
  render() {
    return html`
      <div class="c-media">
        <img
          class="c-avatar"
          src="${this.member.img}"
          loading="lazy"
          width="48"
          height="48"
          alt="${this.member.name}"
        />
        <div class="c-media__content">
          <div class="c-media__title">${this.member.name}</div>
          <a
            class="c-media__link"
            href="https://instagram.com/${this.member.handle}"
            target="_blank"
            rel="nofollow noopener"
          >
            @${this.member.handle}
          </a>
        </div>
      </div>
    `;
  }
}
customElements.define('list-item-media', ListItemMedia);
