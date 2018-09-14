import TintComponent from '../node_modules/tint-web-component/src/tint-component.js';
import {render,html} from '../node_modules/lit-html/lit-html.js'; 
import TImg from './t-img.js';
import TOrganizers from './t-organizers.js';
import TParticipants from './t-participants.js';
export class TApp extends TintComponent {    
    render(){
        render(this.getTemplate(),this._shadowRoot);
    }

    getTemplate(){
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

            article{
                line-height: 1.6em;
                margin: 0 16px;
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
                position: absolute;
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
                position: absolute;
                left: 2rem;
                top:1rem;
                font-size: 3rem;
                text-decoration: none;
                color: #FFF;
                z-index:100;
                vertical-align:top;
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
                display: hidden;
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
               padding:0 2rem;
               max-width:960px;
           }

            #content-container{
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
                #arrow-down {
                    font-size: 8rem;
                    text-decoration: none;
                    color: #F0F0F0;
                    z-index:100;
                    bottom:0;
                    position:absolute;
                    left:50%;
                    margin-left:-3rem;
                }    

                #drawer{
                    width:70vw;
                    right:2rem;
                    top:1rem;
                    left:30vw;
                    height:3rem;
                    background:transparent;
                }

                #drawer.active{
                    left:30vw;
                    border-right: none;
                }
                
                #drawer ul{
                    display:flex;
                    flex-direction:row;
                    justify-content:flex-end;
                    margin:0;
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
                
                
                #community-list, #sponsor-list,#venue{
                    flex-direction:row;
                }

                #venue > * {
                    flex-grow:1;
                    width:50%;
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
        <div id="container">
                <a id="nav-toggle" href="#" @click=${(e) => { e.preventDefault(); this._shadowRoot.querySelector('#drawer').classList.toggle('active')}}>&#9776;</a>
                <div id="drawer">
                        <a id="nav-close" href="#" @click=${(e) => { e.preventDefault(); this._shadowRoot.querySelector('#drawer').classList.toggle('active')}}>&times;</a>
                        <header>
                                <h2>Menu</h2>
                        </header>
                        <ul id="menu">
                            <li><a href="#tentang" @click=${(e) => this.scrollTo(e,'#tentang')}>Tentang</a></li>
                            <li><a href="#venue" @click=${(e) => this.scrollTo(e,'#venue')}>Lokasi</a></li>
                            <li><a href="#komunitas" @click=${(e) => this.scrollTo(e,'#community-list')}>Komunitas</a></li>
                            <li><a href="#organizer" @click=${(e) => this.scrollTo(e,'#organizer-list')}>Organizer</a></li>
                            <li><a href="#participant" @click=${(e) => this.scrollTo(e,'#participants-list')}>Participant</a></li>
                        </ul>
                </div>
                <div id="content-container">
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
                            <div class="block-content">
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
                            <div class="block-content">
                                <h2>Komunitas Yang Hadir</h2>
                                <div>
                                    <ul id="community-list">
                                        <li>Female Geeks</li>
                                        <li>ReactID</li>
                                        <li>VueID</li>
                                        <li>AngularID</li>
                                        <li>PHP Indonesia</li>
                                        <li>Laravel Indonesia</li>
                                        <li>Generation Girl</li>
                                        <li>WordPress Indonesia</li>
                                        <li>Polymer Indonesia</li>
                                        <li>Facebook Dev Circle</li>
                                        <li>JakartaJS</li>
                                        <li>RubyID</li>
                                        <li>JogjaJS</li>
                                        <li>BaliJS</li>
                                        <li>Komunitas Programmer Makassar</li>
                                        <li>Malang Frontend Dev</li>
                                        <li>BandungJS</li>
                                        <li>SurabayaDev</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="block-content">
                                <t-organizers id="organizer-list"></t-organizers>
                            </div>
                            <div class="block-content">
                                <t-participants id="participants-list"></t-participants>
                            </div>
                            <div class="block-content">
                                <h2>Sponsor</h2>
                                <div id="sponsor-list">
                                    <t-img class="sponsor" src="img/logo/tiket.jpeg" size="contain" position="center"></t-img>
                                    <t-img class="sponsor" src="img/logo/sirclo.png" size="contain" position="center"></t-img>
                                </div>
                            </div>
                            <div id="footer" class="block-content">
                                <p>Develop by <a href="//github.com/tyohan">@tyohan</a>,<a href="//github.com/ri7nz">@ri7nz</a> and <a href="//github.com/satyakresna">@satyakresna</a>. Available in our <a href="//github.com/w3id/webunconfid-website">Github</a>.</p>
                                <p>Join our <a href="https://t.me/wwwid_pwa">group discussion</a> and read our <a href="https://medium.com/wwwid">publication</a></p>
                            </div>
                        </div>
                        
                </div>
        </div>
        `;
    }
    scrollTo(e,selector){
        this._shadowRoot.querySelector('#drawer').classList.toggle('active');
        this._shadowRoot.querySelector(selector).scrollIntoView({ 
            behavior: 'smooth' 
          });
        e.preventDefault();
    }
}
customElements.define('t-app',TApp);
