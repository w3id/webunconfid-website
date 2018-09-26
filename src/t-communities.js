import { render, html } from '../node_modules/lit-html/lit-html.js';
import { repeat } from '../node_modules/lit-html/directives/repeat.js';
import { until } from '../node_modules/lit-html/directives/until.js';

export default class TCommunities extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = this.template;
    }

    get template() {
        return html`
            <style>
                :host {
                    display: block;
                }

                #community-list {
                    display:flex;
                    flex-direction:row;
                    flex-wrap:wrap;
                    justify-content:center;
                    align-content:center;
                }

                #community-list li {
                    width:309px;
                }

                ul {
                    padding: 0;
                    margin:0;
                }

                ul li {
                    list-style-type:none;
                    margin-bottom:1em;
                }

                /* Larger than mobile screen */
                @media only screen and (min-width: 40.0rem) {
                    #community-columns {
                        -moz-column-count: 3;
                        -moz-column-gap: 20px;
                        -webkit-column-count: 3;
                        -webkit-column-gap: 20px;
                        column-count: 3;
                        column-gap: 20px;
                    }
                }
            </style>

            <h2>Komunitas Yang Hadir</h2>
            <div id="community-columns">
              ${until(
                fetch('data/communities.json')
                .then(res => res.json())
                .then(communities => {
                  return html`
                    <ul id="community-list">
                      ${repeat(
                          communities.community,
                          community => this.communityCard({
                            name: community.name,
                            url: community.url
                          })
                      )}
                    </ul>
                  `
                }),
                html`
                  <p>Memuat daftar komunitas...</p>
                `
            )}
            </div>
    `
    }

    communityCard({ name, url }) {
      return html`
        <li><a href="${url}" title="${name}" target="_blank" rel="noopener">${name}</a></li>
      `
    }

    connectedCallback() {
        this.render();
    }

    render() {
        window.requestAnimationFrame(() => {
            render(this.template, this._shadowRoot);
        })
    }
}