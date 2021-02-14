import { LitElement, html, css } from 'lit-element';
import { cardStyles, AvatarStyles } from './../styles';

export default class SidebarElement extends LitElement {
  static get properties() {
    return {
      winner: { type: Object }
    };
  }
  constructor() {
    super();
    this.winner = {};
  }

  ordinalSuffixOf(i) {
    const j = i % 10;
    const k = i % 100;
    if (j == 1 && k != 11) return i + 'st';
    if (j == 2 && k != 12) return i + 'nd';
    if (j == 3 && k != 13) return i + 'rd';
    return i + 'th';
  }

  static get styles() {
    return [
      cardStyles,
      AvatarStyles,
      css`
        .c-card__body,
        .c-card__header {
          padding: 2.4rem;
          text-align: center;
        }
        .d-flex {
          display: flex;
          justify-content: space-between;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
          font-family: 'Oswald', system-ui;
        }

        .u-text--small {
          font-size: 1.4rem;
        }

        .u-bg--light-gradient {
          background: linear-gradient(
            to top,
            var(--light),
            var(--lightest)
          ) !important;
        }
        .u-text--left {
          text-align: left;
        }
        .u-text--right {
          text-align: right;
        }
        .c-list__item {
          padding: 1.6rem 0;
        }
        .u-text--dark {
          color: var(--darkest) !important;
        }
        .u-mb--16 {
          margin-bottom: 1.6rem;
        }
        .u-text--teal {
        }
        .handle {
          color: var(--teal) !important;
          font-size: 1.4rem;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="l-grid__item l-grid__item--sticky">
        <div class="c-card u-bg--light-gradient u-text--dark">
          <div class="c-card__body">
            <div class="d-flex">
              <div class="u-text--left">
                <div class="u-text--small">My Rank</div>
                <h2>${this.ordinalSuffixOf(this.winner.rank)} Place</h2>
              </div>
              <div class="u-text--right">
                <div class="u-text--small">My Score</div>
                <h2>${this.winner.sent}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="c-card">
          <div class="c-card__body">
            <div class="u-mb--16">Top Sender Last Week</div>
            <img
              class="c-avatar c-avatar--lg"
              src="${this.winner.img}"
              loading="lazy"
              alt="${this.winner.name}"
            />
            <h3 class="u-mt--16">${this.winner.name}</h3>
            <span class="handle">${this.winner.handle} </span>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('sidebar-element', SidebarElement);
