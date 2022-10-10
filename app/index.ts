import MyLogin from './components/Login/Login';
import MyGif from './components/Gif/Gif.js';
import MyInfo from './components/Info/Info.js';
import MyEnlaces from './components/Enlaces/Enlaces.js';
import './components/index.js';

class AppContainer extends HTMLElement {

    login: MyLogin[] = [];
    gif: MyGif[] = [];
    info: MyInfo[] = [];
    enlaces: MyEnlaces[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open'});

        const login = this.ownerDocument.createElement('my-login') as MyLogin;
        this.login.push(login);

        const gif = this.ownerDocument.createElement('my-gif') as MyGif;
        this.gif.push(gif);

        const info = this.ownerDocument.createElement('my-info') as MyInfo;
        this.info.push(info);

        const enlaces = this.ownerDocument.createElement('my-enlaces') as MyEnlaces;
        this.enlaces.push(enlaces);

    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = '';

            this.login.forEach((login) => {
                this.shadowRoot?.appendChild(login);
            });

            this.gif.forEach((gif) => {
                this.shadowRoot?.appendChild(gif);
            });

            this.info.forEach((info) => {
                this.shadowRoot?.appendChild(info);
            });

            this.enlaces.forEach((enlaces) => {
                this.shadowRoot?.appendChild(enlaces);
            });
        }
    }

}

customElements.define('app-container', AppContainer);