import TImg from './t-img.js';
import {render,html} from '../node_modules/lit-html/lit-html.js'; 
export default class TParticipants extends HTMLElement{
    constructor() {
		super();
        this._shadowRoot=this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML=this.template;
	}

    get template(){
        return html`
            <style>
                :host{
                    display:block;
                }

                #participant-list{
                    display:flex;
                    flex-direction:row;
                    flex-wrap:wrap;
                    justify-content:center;
                    align-content:center;
                }

                .participant{
                    width:309px;
                }
                
                .participant t-img{
                    width:10rem;
                    height:10rem;
                    margin:2rem auto;
                }
                .participant h3{
                    margin-top:0;
                }
                .participant .desc{
                    height:18rem;
                }
            
                /* Larger than mobile screen */
                @media (min-width: 40.0rem) { 
                    #participant-list{
                        flex-direction:row;
                        justify-content:space-between;
                    }
                }
            </style>
            <h2>Yang Akan Hadir</h2>
            <div id="participant-list">
                <div class="participant">
                    <t-img src="../img/user-solid.svg"></t-img>
                    <h3>Google</h3>
                    <div class="desc">
                        Tim Web Developer Relations adalah tim yang memberikan arahan dan dukungan kepada web developers agar bisa membuat aplikasi web yang nyaman bagi pengguna.
                    </div>
                </div>
                <div class="participant">
                    <t-img src="../img/user-solid.svg"></t-img>
                    <h3>WWWID</h3>
                    <div class="desc">
                        Komunitas web yang aktif di Telegram Group dan Medium untuk mendorong pertumbuhan website modern di Indonesia.
                    </div>
                </div>
                <div class="participant">
                    <t-img src="../img/user-solid.svg"></t-img>
                    <h3>GDG Yogyakarta</h3>
                    <div class="desc">Komunitas pengembang Google Yogyakarta yang aktif mendukung para pengembang Android, Web, dan Cloud, dan teknologi Google lainnya.</div>
                </div>
                <div class="participant">
                    <t-img src="../img/user-solid.svg"></t-img>
                    <h3>JogjaJS</h3>
                    <div class="desc">
                        Kumpulan para pengembang JavaScript Yogyakarta yang aktif mengadakan meetup dan diskusi bulanan di Yogyakarta.
                    </div>
                </div>
                <div class="participant">
                    <t-img src="../img/user-solid.svg"></t-img>
                    <h3>Generation Girl</h3>
                    <div class="desc">
                        Organisasi nirlaba yang fokus memberdayakan dan mendukung para perempuan muda Indonesia untuk bisa menjadi pengembang dan teknisi berkualitas untuk mendorong pertumbuhan industri startup Indonesia.
                    </div>
                </div>
                <div class="participant">
                    <t-img src="../img/user-solid.svg"></t-img>
                    <h3>Female Geek</h3>
                    <div class="desc">
                        Komunitas pengembang perempuan Indonesia yang tersebar di beberapa kota di Indonesia. Fokus dalam memberdayakan dan mengajar pengembang perempuan Indonesia dalam dunia programming.
                    </div>
                </div>
            </div>
        `;
    }
    connectedCallback() {
		this.render();
    }

    render(){
        window.requestAnimationFrame(()=>{
            render(this.template,this._shadowRoot);
        });
	}
}
customElements.define('t-participants',TParticipants);