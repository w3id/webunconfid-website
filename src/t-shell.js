import {render,html} from '../node_modules/lit-html/lit-html.js'; 
import TRouter from './t-router.js';

export default class TShell extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot=this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML=this.template;
        this.activePage=``;
    }

    connectedCallback() {
        this.router=new TRouter;
        
        this.router.on('/home',async ()=>{
            const module= await import('./t-app.js');
            this.activePage=html`<t-app active="${window.location.hash}"></t-app>`;
            this.render(true);
        });

        this.router.on('/schedule',async ()=>{
            const TSchedule= await import('./t-schedule.js');
            this.activePage=html`<t-schedule></t-schedule>`;
            this.render(true);
        });

        if(this.router.activeRoute===null){
            this.router.goTo('/home');
        }

        this.render();
    }

    render(toggle){
        window.requestAnimationFrame(()=>{
            render(this.template,this._shadowRoot);
            if(toggle===true){
                this._shadowRoot.querySelector('#drawer').classList.remove('active');
            }
        });
    }

    get template(){
        return html`
        <style>
            :host{
                display:block;
                background-color:#F0F0F0;
            }
            a{
                text-decoration:none;
            }
            #container{
                position: relative;
                height: 100vh;
                width: 100vw;
            }

            #drawer{
                width:70vw;
                height: 100vh;
                left:-70vw;
                top:0;
                position: fixed;
                background: #FFF;
                transition-duration: 0.2s;
                z-index:1000;
            }

            #drawer ul{
                list-style:none;
            }

            #drawer.active{
                left:0;
                border-right: 1px solid #CCC;
            }

            #drawer ul li{
                line-height:4rem;
            }
            #nav-toggle{
                position: fixed;
                left: 1rem;
                top:1rem;
                font-size: 3rem;
                text-decoration: none;
                color: #FFF;
                z-index:100;
                vertical-align:top;
                height: 50px;
                width: 50px;
                text-align: center;
                border-radius: 100%;
                background-color: #000;
                -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
            }
            #nav-close{
                position: absolute;
                right: 2rem;
                font-size: 3rem;
                top:1rem;
                padding:0;
                margin:0;
                text-decoration:none;
            }

             @media (min-width: 40.0rem) { 
                #arrow-down {
                    font-size: 8rem;
                    text-decoration: none;
                    color: #F0F0F0;
                    z-index:100;
                    bottom:0;
                    position:absolute;
                    left:50%;
                    transform: translateX(-50%);
                }    

                #drawer{
                    width:70vw;
                    right:2rem;
                    top:1rem;
                    left:30vw;
                    height:3rem;
                    background:transparent;
                    position: absolute;
                }

                #drawer.active{
                    left:30vw;
                    border-right: none;
                }
                
                #drawer ul{
                    display:flex;
                    flex-direction:row;
                    justify-content:flex-end;
                    margin:0 4rem 0 0;
                }

                #drawer ul li{
                    padding:1rem 2rem 1rem 4rem;
                    text-align:right;
                    line-height:2rem;
                }
                #drawer ul li a{
                    color:#FFF;
                }
                #drawer header,#nav-close,#nav-toggle{
                    display:none;
                }
             }

        </style>
        <div id="container">
                <a id="nav-toggle" href="#" @click=${(e) => { e.preventDefault(); this._shadowRoot.querySelector('#drawer').classList.toggle('active')}}>&#9776;</a>
                <div id="drawer">
                        <a id="nav-close" href="#" @click=${(e) => { e.preventDefault(); this._shadowRoot.querySelector('#drawer').classList.toggle('active')}}>&times;</a>
                        <header>
                                <h2>Menu</h2>
                        </header>
                        <ul id="menu">
                            <li><a href="/home#tentang">Tentang</a></li>
                            <li><a href="/home#venue-content">Lokasi</a></li>
                            <li><a href="/schedule">Jadwal</a></li>
                            <li><a href="/home#community-content">Komunitas</a></li>
                            <li><a href="/home#organizer-list">Organizer</a></li>
                            <li><a href="/home#participants-list">Participant</a></li>
                        </ul>
                </div>
                <div id="content-container">
                    ${this.activePage}
                </div>
        </div>
        `;
    }
    
}
customElements.define('t-shell', TShell);