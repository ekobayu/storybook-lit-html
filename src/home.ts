import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'
import styles from './styles/the_accelerator/scss/the_accelerator.style.scss?inline'
import { Hero } from './components/content-blocks/Hero/Hero'
// import styles1 from './components/content-blocks/Hero/Hero.scss?inline'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('home-element')
export class Home extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0
  // static styles = unsafeCSS(styles)

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `
  }

  render() {
    const heroArgs = {
      wide_image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      wide_alignment: 'center center',
      large_image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      large_alignment: 'center center',
      mobile_image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      mobile_alt: 'Mobile Alt',
      mobile_alignment: 'center center',
      display_page_title: true,
      page_title: 'Hello World helo'
    }
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      ${Hero(heroArgs)}
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">count is ${this.count}</button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }

  // static styles = css`
  //   // :host {
  //   //   max-width: 1280px;
  //   //   margin: 0 auto;
  //   //   padding: 2rem;
  //   //   text-align: center;
  //   // }

  //   .logo {
  //     height: 6em;
  //     padding: 1.5em;
  //     will-change: filter;
  //     transition: filter 300ms;
  //   }
  //   .logo:hover {
  //     filter: drop-shadow(0 0 2em #646cffaa);
  //   }
  //   .logo.lit:hover {
  //     filter: drop-shadow(0 0 2em #325cffaa);
  //   }

  //   .card {
  //     padding: 2em;
  //   }

  //   .read-the-docs {
  //     color: #888;
  //   }

  //   ::slotted(h1) {
  //     font-size: 3.2em;
  //     line-height: 1.1;
  //   }

  //   a {
  //     font-weight: 500;
  //     color: #646cff;
  //     text-decoration: inherit;
  //   }
  //   a:hover {
  //     color: #535bf2;
  //   }

  //   button {
  //     border-radius: 8px;
  //     border: 1px solid transparent;
  //     padding: 0.6em 1.2em;
  //     font-size: 1em;
  //     font-weight: 500;
  //     font-family: inherit;
  //     background-color: #1a1a1a;
  //     cursor: pointer;
  //     transition: border-color 0.25s;
  //   }
  //   button:hover {
  //     border-color: #646cff;
  //   }
  //   button:focus,
  //   button:focus-visible {
  //     outline: 4px auto -webkit-focus-ring-color;
  //   }

  //   @media (prefers-color-scheme: light) {
  //     a:hover {
  //       color: #747bff;
  //     }
  //     button {
  //       background-color: #f9f9f9;
  //     }
  //   }
  // `
}

declare global {
  interface HTMLElementTagNameMap {
    'home-element': Home
  }
}
