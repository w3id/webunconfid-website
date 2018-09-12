export default class TImg extends HTMLElement {
	constructor() {
		super();
        this.src='';
        this.size='cover';
        this.position='top';
        this._shadowRoot=this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML=this.template;
	}
  
	static get observedAttributes() { return ['src','size','position']; }
  
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
		}
		this.render();
    }
    
    get template(){
        return `
        <style>
            :host{
                position:relative;
                display:block;
            }
            #container{
                position:absolute;
                top:0;
                bottom:0;
                left:0;
                right:0;
                background:transparent url(${this.src}) no-repeat;
                background-size:${this.size};
                background-position:${this.position};
            }
        </style>
        <div id="container"></div>
        `;
    }

	connectedCallback() {
		this.render();
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

customElements.define('t-img', TImg);