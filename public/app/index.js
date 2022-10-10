import './components/index.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.login = [];
        this.gif = [];
        this.info = [];
        this.enlaces = [];
        this.attachShadow({ mode: 'open' });
        const login = this.ownerDocument.createElement('my-login');
        this.login.push(login);
        const gif = this.ownerDocument.createElement('my-gif');
        this.gif.push(gif);
        const info = this.ownerDocument.createElement('my-info');
        this.info.push(info);
        const enlaces = this.ownerDocument.createElement('my-enlaces');
        this.enlaces.push(enlaces);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
            this.login.forEach((login) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(login);
            });
            this.gif.forEach((gif) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(gif);
            });
            this.info.forEach((info) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(info);
            });
            this.enlaces.forEach((enlaces) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(enlaces);
            });
        }
    }
}
customElements.define('app-container', AppContainer);
