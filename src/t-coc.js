export default class TCoc extends HTMLElement {
    constructor(){
        super();
        this._shadowRoot=this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }

    render(){
        window.requestAnimationFrame(()=>{
            this._shadowRoot.innerHTML=this.template;
        });
    }
    
    get template(){
        return `
        <style>
            :host{
                display:block;
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
            #coc-container{
                margin:0 auto;
                max-width:960px;
                padding: 0 1rem 4rem 1rem;
            }
        </style>
        <div class="featured-image">
                <h1>Kode Etik</h1>
        </div>
        <div id="coc-container">
        <div class="community-guidelines__grid">
            <h3>Semua peserta kami wajibkan untuk:</h3>
            <div class="cell">
            <h4>Menghargai peserta lain</h4>
            <p>Hargai semua peserta. Peserta harus mengerti bahwa semua yang ada di event ini berhak untuk hadir dan mendapatkan pengalaman baik yang sama dengan semua. Serta setiap orang berhak menikmati kegiatan tanpa khawatir akan pelecehan, diskriminasi, atau direndahkan, baik tersirat atau tidak tersirat. Bercanda tidak seharusnya merendahkan atau mengolok peserta lain. Pertimbangkan apa yang ingin kalian katakan apakah kalian merasa nyaman juga mendengarnya bila seseorang mengatakan pada diri kalian.</p>
            </div>
            <div class="cell">
            <h4>Utarakan bila melihat atau mendengar sesuatu</h4>
            <p>Pelecehan tidak kami toleransi, dan kalian diberikan hak untuk bertindak bila ada yang dilecehkan atau direndahkan. Terkadang pihak yang melecehkan atau merendahkan tidak merasa bahwa yang dia lakukan itu adalah salah, disarankan untuk mengingatkan pelaku dengan sopan, atau memberitahukan kepada panitia bila pelaku tidak menerima teguran tersebut.</p>
            </div>
            <div class="cell">
            <h4>Berlatih menjawab iya pada semua</h4>
            <p>Ini adalah wadah kita untuk berlatih mengeluarkan ide. Tidak ada ide yang buruk, serta semua orang berhak menyampaikan ide atau pendapat. Kita semua akan mendapatkan manfaat dengan makin banyak ide atau pendapat yang dikeluarkan.</p>
            </div>
        </div>

        <div class="content">
            <h3>Kami TIDAK MENTELORANSI untuk pelecehan atau gangguan dalam bentuk</h3>
            <div>
                <div class="left">
                <h4>Termasuk tapi tidak terbatas hanya:</h4>
                <ul>
                    <li>Mengikuti atau stalking</li>
                    <li>Intimidasi yang disengaja</li>
                    <li>Foto atau perekaman yang memalukan</li>
                    <li>Mengganggu kelancaran acara</li>
                    <li>Kata-kata yang menyerang, atau bersifat rasis dan mengintimidasi</li>
                    <li>Penggambaran atau penguncapan hal-hal bersifat seksual di ruang publik</li>
                    <li>Kontak fisik yang tidak senonoh</li>
                    <li>Perhatian, pandangan  sexual atau fisik yang menganggu.</li>
                </ul>
                </div>
                <div class="right">
                <h4>Hal-hal yang terkait namun tidak terbatas pada</h4>
                <ul>
                    <li>Kondisi mental</li>
                    <li>Ras</li>
                    <li>Warna kulit</li>
                    <li>Suku</li>
                    <li>Identitas sexual</li>
                    <li>Ekspresi sexual</li>
                    <li>Orientasi sexual</li>
                    <li>Umur</li>
                    <li>Ukuran fisik</li>
                    <li>Disabilitas</li>
                    <li>Penampilan</li>
                    <li>Agama</li>
                    <li>Kehamilan</li>
                </ul>
                </div>
            </div>
        </div>
        </div>
        
        `;
    }
}

customElements.define('t-coc',TCoc);