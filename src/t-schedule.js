import {render,html} from '../node_modules/lit-html/lit-html.js'; 
import { repeat } from '../node_modules/lit-html/directives/repeat.js';
import { until } from '../node_modules/lit-html/directives/until.js';
import {when} from '../node_modules/lit-html/directives/when.js';


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
                    backgroun:#FFF;
                }
                .featured-image{
                    background: url(../img/featured.jpg) no-repeat center center fixed;
                    background-size: cover;
                    height: 30vh;
                    margin-bottom:5rem;
                    color:#FFF;
                    position:relative;
                }
                .featured-image h1{
                    position:absolute;
                    bottom: 1rem;
                    left:1rem;
                    margin:0;
                }

                #schedule-container{
                    padding:0 1rem;
                }
                .date{
                    margin:4rem 0;
                    font-size:2rem;
                }
                .event{
                    margin-bottom:4rem;
                }
            </style>
            <div class="featured-image">
                <h1>Jadwal</h1>
            </div>
            <div id="schedule-container">
                <div id="schedule-list">
                ${html`
                    ${until(
                        fetch(this.icalJsonUrl)
                        .then(res => res.json())
                        .then(calendar => {
                            const events =calendar.vcalendar[0].vevent.reverse();
                            let currentDate=null;
                            return html`
                            ${repeat(
                                events,
                                event => {
                                    const dateObj=this.eventCard(currentDate,event);
                                    currentDate=this.getDate(event.dtstart).toDateString();
                                    return dateObj;
                                }
                            )}`;
                        }),
                        html`<span> Menunggu data...</span>`
                    )}`}
                </div>
            </div>  
        `;
    }

    eventCard(currentDate,event) {
        const startTime=this.getDate(event.dtstart);
        const endTime=this.getDate(event.dtend);
        return html`
            ${when(currentDate!==startTime.toDateString(),()=>html`
            <div class="date">
                <h2></h2>${startTime.toDateString()}</h2>
            </div>
            `,()=>html``)}
            <div class="event">
                <div>${startTime.toTimeString().substring(0,5)} - ${endTime.toTimeString().substring(0,5)}</div>
                <h3>${event.summary}</h3>
                <div>${event.description}</div>
            </div> 
            `;
    }

    getDate(datetime){
        const year=datetime.substring(0,4);
        const month=datetime.substring(4,6);
        const day=datetime.substring(6,8);
        const hour=datetime.substring(9,11);
        const mins=datetime.substring(11,13);
        return new Date(Date.UTC(year,month-1,day,hour,mins));
    }
}
customElements.define('t-schedule',TSchedule);