import {render,html} from '../node_modules/lit-html/lit-html.js'; 
import TImg from './t-img.js';
import TOrganizers from './t-organizers.js';
import TParticipants from './t-participants.js';
import { register } from '../node_modules/register-service-worker/index.js'


customElements.define('t-img', TImg);
customElements.define('t-organizers', TOrganizers);
customElements.define('t-participants', TParticipants);

export class TApp extends HTMLElement {
    constructor(){
        super();
        this._shadowRoot=this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML=this.template;
    }  

    static get observedAttributes() {return ['active']; }

    render(){
        render(this.template,this._shadowRoot);
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name==='active'){
            this.scrollTo(newValue);
        }
        this.render();
    }

    connectedCallback(){
        this.render();
        this.scrollTo(this.getAttribute('active'));
        register('/service-worker.js', {
            ready (registration) {
            console.log('Service worker is active.')
            },
            registered (registration) {
            console.log('Service worker has been registered.')
            },
            cached (registration) {
            console.log('Content has been cached for offline use.')
            },
            updatefound (registration) {
            console.log('New content is downloading.')
            },
            updated (registration) {
            console.log('New content is available; please refresh.')
            },
            offline () {
            console.log('No internet connection found. App is running in offline mode.')
            },
            error (error) {
            console.error('Error during service worker registration:', error)
            }
        });
    }

    get template(){
        return html`
        <style>
            :host{
                display:block;
                margin:0;
                padding:0;
            }

            a{
                text-decoration:none;
            }

            
            #featured-image{
                background: url(../img/featured.jpg) no-repeat center center fixed;
                background-size: cover;
                height: 100vh;
                margin-bottom:5rem;
                color:#FFF;
                position:relative;

                display: flex;
                align-items: center;
                justify-content: center;
            }
            #arrow-down{
                display: none;
            }
            #featured-image .dark-bg{
                position:absolute;
                top:0;
                bottom:0;
                right:0;
                left:0;
                background-color:#000;
                opacity:0.5;
            }
            #featured-image .content{
                position:relative;
                text-align:center;
                margin:0 auto;
                width:80%;
                // top:20%;
                font-size:1.2em;
            }
            #featured-image .venue{
                font-size:0.8em;
            }
            header{
                margin:16px;
            }

           .block-content{
               margin:0 auto 8rem auto;
               padding:0 1rem;
               max-width:960px;
           }
           
           .block-content h2{
               width:100%;
           }

            .app-container{
                text-align:center; 
            }

                
            #venue{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-content:left;
            }
            #venue > * {
                flex-grow:1;
            }

            #venue t-img{
                height:300px;
            }


            #community-list{
                display:flex;
                flex-direction:row;
                flex-wrap:wrap;
                justify-content:center;
                align-content:center;
            }
            #community-list li{
                width:309px;
            }
            
            #sponsor-list{
                display:flex;
                flex-direction:row;
                flex-wrap:wrap;
                justify-content:center;
                align-content:center;
            }
            #sponsor-list t-img{
                width:320px;
                height:320px;
            }

            .block-content ul{
                column-count:3;
                padding: 0;
                margin:0;
            }
            .block-content ul li{
                list-style-type:none;
                margin-bottom:1em;
            }

            

            /* Larger than mobile screen */
            @media (min-width: 40.0rem) {                 
                #community-list, #sponsor-list,#venue{
                    flex-direction:row;
                }
                
                #venue > * {
                    flex-grow:1;
                    width:40%;
                }

                #venue t-img{
                    height:300px;
                }
                
                #venue article{
                    text-align:left;
                    padding:0 2rem;
                }
            }


        </style>
        <div class="app-container">
            <div id="featured-image">
                <div class="dark-bg"></div>
                <a id="arrow-down" href="#main-content" @click=${(e) => this.scrollTo(e,'#tentang')}>&#8964;</a>
                <div class="content">
                    <h1>WebUnconfID</h1>
                    <h4>Web Community Leaders Bootcamp</h4>
                    <p>Yogyakarta, 29-30 September 2018</p>
                    <div class="venue">
                    <h4>Ethes Coworking &amp; Coliving Space</h4>
                    <p>Jl. Umbul Permai No.88, Lojajar, <br/>Kabupaten Sleman, Daerah Istimewa Yogyakarta</p>
                    </div>
                </div>
            </div>
            <div id="main-content">
                <div id="tentang" class="block-content">
                    <h2>Bootcamp Untuk Aktivis Komunitas Pengembang Web Indonesia</h2>
                    <article>
                    <p>Indonesia adalah negara besar dengan pertumbuhan industri startup yang sangat cepat. Tapi pertumbuhan ini tidak dibarengi dengan pertumbuhan suplai talenta. Bahkan lulusan universitas belum memenuhi kebutuhan standar industri. Karena itu komunitas di sini memainkan peran yang sangat penting untuk mengembangkan talenta kita dan menyiapkan mereka untuk siap dengan standar industri.
                    </p>
                    <p>Bootcamp ini diperuntukkan untuk kalian yang aktif di komunitas pengembang web Indonesia sehingga kita bisa saling mengenal satu sama lain dan bersama-sama berdiskusi untuk membuat para pengembang web di Indonesia bisa membuat web yang lebih baik.</p>
                    </article>
                </div>
                <div id="venue-content" class="block-content">
                    <h2>Lokasi</h2>
                    <div id="venue">
                        <t-img src="img/ethes-facade.jpg"></t-img>
                        <article>
                            <h4>Ethes Coworking &amp; Coliving Space</h4>
                            <p>Jl. Umbul Permai No.88, Lojajar, <br/>Kabupaten Sleman, Daerah Istimewa Yogyakarta</p>
                            <p>Ethes coworking &amp; coliving space adalah coliving space pertama di Yogyakarta yang diperuntukkan untuk freelancers dan entrepreneurs untuk tinggal dan bekerja.</p>
                            <p><a href="https://goo.gl/maps/2GWpi5SbTrE2">Lihat di Google Maps</a></p>
                        </article>
                    </div>
                </div>
                <div id="community-content" class="block-content">
                <div id="community">
                    <h2>Komunitas Yang Hadir</h2>
                    <div>
                        <ul id="community-list">
                            <li><a href="//t.me/femalegeek" target="_blank" rel="noopener">Female Geeks</a></li>
                            <li><a href="//t.me/react_id" target="_blank" rel="noopener">ReactID</a></li>
                            <li><a href="//t.me/vuejsid" target="_blank" rel="noopener">VueID</a></li>
                            <li><a href="//t.me/AngularID" target="_blank" rel="noopener">AngularID</a></li>
                            <li><a href="//www.phpindonesia.id/" target="_blank" rel="noopener">PHP Indonesia</a></li>
                            <li><a href="//t.me/laravelindonesia" target="_blank" rel="noopener">Laravel Indonesia</a></li>
                            <li><a href="https://t.me/YiiFrameworkIndonesia" target="_blank" rel="noopener">Yii Indonesia</a></li>
                            <li><a href="http://www.generationgirl.org/" target="_blank" rel="noopener">Generation Girl</a></li>
                            <li><a href="//wp-id.org/" target="_blank" rel="noopener">WordPress Indonesia</a></li>
                            <li><a href="//t.me/polymer_id" target="_blank" rel="noopener">Polymer Indonesia</a></li>
                            <li><a href="//developers.facebook.com/developercircles" target="_blank" rel="noopener">Facebook Dev Circle</a></li>
                            <li><a href="//www.meetup.com/JakartaJS/" target="_blank" rel="noopener">JakartaJS</a></li>
                            <li><a href="//t.me/ruby_id" target="_blank" rel="noopener">RubyID</a></li>
                            <li><a href="//jogja.js.org/" target="_blank" rel="noopener">JogjaJS</a></li>
                            <li><a href="//balijs.com" target="_blank" rel="noopener">BaliJS</a></li>
                            <li><a href="//bit.ly/kpmchat" target="_blank" rel="noopener">Komunitas Programmer Makassar</a></li>
                            <li><a href="//www.facebook.com/groups/frontendev.malang" target="_blank" rel="noopener">Malang Frontend Dev</a></li>
                            <li><a href="//www.meetup.com/BandungJS/" target="_blank" rel="noopener">BandungJS</a></li>
                            <li><a href="//t.me/surabayadev" target="_blank" rel="noopener">SurabayaDev</a></li>
                            <li><a href="//hammer-code.github.io" target="_blank" rel="noopener">Hammer-Code</a></li>
                            <li><a href="//phpbali.com" target="_blank" rel="noopener">PHPBali</a></li>
                        </ul>
                    </div>
                </div>
                <div class="block-content" id="organizer-list">
                    <t-organizers></t-organizers>
                </div>
                <div class="block-content" id="participants-list">
                    <t-participants></t-participants>
                </div>
                <div class="block-content" id="sponsor">
                    <h2>Sponsor</h2>
                    <div id="sponsor-list">
                        <a href="//tiket.com" target="_blank" rel="noopener"><t-img class="sponsor" alt="Link ke Tiket.com" src="img/logo/tiket.png" size="contain" position="center"></t-img></a>
                        <a href="//sirclo.com" target="_blank" rel="noopener"><t-img class="sponsor" alt="Line ke Sirclo.com" src="img/logo/sirclo.png" size="contain" position="center"></t-img></a>
                    </div>
                </div>
                <div id="footer" class="block-content">
                    <p>Develop by <a href="//github.com/tyohan">@tyohan</a>,<a href="//github.com/ri7nz">@ri7nz</a> and <a href="//github.com/satyakresna">@satyakresna</a>. Available in our <a href="//github.com/w3id/webunconfid-website">Github</a>.</p>
                    <p>Join our <a href="https://t.me/wwwid_pwa">group discussion</a> and read our <a href="https://medium.com/wwwid">publication</a></p>
                </div>
            </div>
        </div>
        `;
    }

    scrollTo(selector){
        if(selector.length>0){
            const el=this._shadowRoot.querySelector(selector);
            if(el!==null){
                el.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
    }
}

customElements.define('t-app',TApp);
