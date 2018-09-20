import {render,html} from '../node_modules/lit-html/lit-html.js'; 
import { repeat } from '../node_modules/lit-html/directives/repeat.js';
import { until } from '../node_modules/lit-html/directives/until.js';

export class TSchedule extends HTMLElement {
    constructor(){
        super();
        this.icalJsonUrl='https://ical-to-json.herokuapp.com/convert.json?url=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fical%2Fqu110c8pvuem82r9o0d6tln5d4%2540group.calendar.google.com%2Fpublic%2Fbasic.ics';
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
        return /*html*/`
            <style>
                :host{
                    display:block;
                }
            </stye>
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
                                calendar.vevent,
                                events => this.eventCard(event)
                            )}`;
                        }),
                        html`<span> Menunggu Para Partisipan...</span>`
                    )}`}
                </div>
            </div>  
        `;
    }

    eventCard(event) {
        return html`
            <div class="event">
            
            </div> 
            `;
    }
}