import {render,html} from '../node_modules/lit-html/lit-html.js'; 
import { repeat } from '../node_modules/lit-html/directives/repeat.js';
import { until } from '../node_modules/lit-html/directives/until.js';

export default class TSchedule extends HTMLElement {
    constructor(){
        super();
        this.icalJsonUrl='/data/schedules.json';
        this._shadowRoot=this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML=this.template;
    }

    connectedCallback() {
        this.render();
    }

    render(){
        window.requestAnimationFrame(()=>{
            render(this.template,this._shadowRoot);
        });
    }

    get template(){
        return html`
            <style>
                :host{
                    display:block;
                }
            </style>
            <div id="container">
                <h2>Jadwal</h2>
                <div id="schedule-list">
                ${html`
                    ${until(
                        fetch(this.icalJsonUrl)
                        .then(res => res.json())
                        .then(calendar => {
                            return html`
                            ${repeat(
                                calendar.vcalendar[0].vevent,
                                event => this.eventCard(event)
                            )}`;
                        }),
                        html`<span> Menunggu data...</span>`
                    )}`}
                </div>
            </div>  
        `;
    }

    eventCard(event) {
        return html`
            <div class="event">
                <h3>${event.summary}</h3>
                <div>${event.description}</div>
                <div>${event.dtstart} - ${event.dtend}</div>
            </div> 
            `;
    }
}
customElements.define('t-schedule',TSchedule);