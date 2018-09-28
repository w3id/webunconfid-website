export default class TImg extends HTMLElement {
	constructor() {
        super();
        this.src='';
        this.size='cover';
        this.position='top';
        this.rounded=false;
        this.observer=null;
        this._shadowRoot=this.attachShadow({mode: 'open'});
    }
    

    fetchImage(url){
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(url);
            image.onerror = (err) => reject(err);
            image.src = url;
        })
    }

    setupImageLazyLoad () {
        this.observer = new IntersectionObserver((entries) => {
            
            for (let entry of entries) {
                if (entry.isIntersecting && !this.isImageLoaded()) {
                    this.fetchImage(this.src)
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
            }
        </style>
        <div class="container">
        <div class="img" style="border-radius:${this.rounded ? '100%' : '0'};background:transparent url(data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==) no-repeat;background-size:${this.size};background-position:${this.position};"></div>
        </div>
        `;
    }

	connectedCallback() {
        this.render();
        this.setupImageLazyLoad();
	}
  
	get country() {
		return this._countryCode;
	}
	set country(v) {
		this.setAttribute('country', v);
	}
    
	render(){
        window.requestAnimationFrame(()=>{
            this._shadowRoot.innerHTML=this.template;
        });
	}
	
}