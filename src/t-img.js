export default class TImg extends HTMLElement {
	constructor() {
        super();
        this.src='';
        this.size='cover';
        this.position='top';
        this.alt = ''
        this.rounded=false;
        this.observer=null;
        this._shadowRoot=this.attachShadow({mode: 'open'});
        this.native = false;
        if ('loading' in HTMLImageElement.prototype) {
            // supported in browser
            this.native = true;
        }
    }
    

    fetchImage(url,alt){
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(url);
            image.onerror = (err) => reject(err);
            image.src = url;
            image.alt = alt;
        })
    }

    setupImageLazyLoad () {
        this.observer = new IntersectionObserver((entries) => {
            
            for (let entry of entries) {
                if (entry.isIntersecting && !this.isImageLoaded()) {
                    this.fetchImage(this.src,this.alt)
                        .then((url) => {
                            this.attachLoadedImageToImageElement(url)
                        })
                }
            }
        })

        this.observer.observe(this)
    }

    getImageElement () {
        return this.shadowRoot.querySelector('.img')
    }

    isImageLoaded () {
        return this.getImageElement().classList.contains('img-loaded')
    }

    tagImageElementLoaded () {
        const imgEl = this.getImageElement()
        imgEl.classList.add('img-loaded')
    }

    attachLoadedImageToImageElement (imageUrl) {
        const imgEl = this.getImageElement()
        imgEl.style.backgroundImage = `url(${imageUrl})` 
        this.tagImageElementLoaded()
    }
  
	static get observedAttributes() { return ['src','size','position','rounded']; }

	attributeChangedCallback(name, oldValue, newValue) {
		switch(name){
            case 'src':
                this.src = newValue;
                break;
            case 'size':
                this.size = newValue;
                break;
            case 'position':
                this.position = newValue;
                break;
            case 'rounded':
                this.rounded = newValue === null ? false : true;
                break;
		}
		this.render();
    }
    
    get template(){
        let img = `<div class="img" style="border-radius:${this.rounded ? '100%' : '0'};background:transparent url(data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==) no-repeat;"></div>`;
        if(this.native){
            img = `<img src="${this.src}" alt="${this.alt}">`;
        }
        return `
        <style>
            :host{
                display:block;
            }
            .container{
                position:relative;
                height:100%;
            }
            .container .img{
                position:absolute;
                top:0;
                bottom:0;
                left:0;
                right:0;
                background-size:${this.size};
                background-position:${this.position};
            }

            .container img {
                position:absolute;
                top:0;
                bottom:0;
                left:0;
                right:0;
                display:block;
                width:100%;
                height:100%;
                object-position: 50% top;
                object-fit:${this.size};
                border-radius:${this.rounded ? '100%' : '0'};
            }
        </style>
        <div class="container">
            ${img}
        </div>
        `;
    }

	connectedCallback() {
        this.render();
        if(!this.native)
            this.setupImageLazyLoad();
	}
    
	render(){
        window.requestAnimationFrame(()=>{
            this._shadowRoot.innerHTML=this.template;
        });
	}
	
}