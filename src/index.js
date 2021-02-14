import { LitElement, html, css } from 'lit-element';
import { teamMock } from './data/team';

// Components
import './components/Header.js';
import './components/Sidebar';
import './components/Main.js';

// Style
import './styles.css';

class App extends LitElement {
  constructor() {
    super();
    this.team = [];
    this.winner = {};
    this.team = teamMock.map((t) => ({
      ...t,
      className: `rank-${t.rank}`
    }));
    let sortedTeam = [...this.team].sort((a, b) => b.sent - a.sent);
    this.winner = sortedTeam[0];
  }
  static get styles() {
    return css`
      .container {
        width: 100%;
        max-width: 960px;
        margin: auto;
        padding: 1.6rem 1.6rem 3.2rem;
        box-sizing: border-box;
      }

      .layout {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 1.6rem;
        grid-row-gap: 1.6rem;
        position: relative;
      }
      @media screen and (max-width: 700px) {
        .layout {
          grid-template-columns: 1fr;
        }
      }
    `;
  }
  render() {
    return html`
      <div class="container">
        <header-element></header-element>
        <section class="layout">
          <sidebar-element .winner="${this.winner}"></sidebar-element>
          <main-element .team="${this.team}"></main-element>
        </section>
      </div>
    `;
  }
}
customElements.define('my-app', App);
