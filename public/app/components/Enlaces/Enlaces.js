class MyEnlaces extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./app/components/Enlaces/style.css"
            <section>
            <div class="contenedor">
                <image class="enlaces" src="./app/assets/enlaces.png"></image>
            </div>
            </section>
            `;
        }
    }
}
customElements.define('my-enlaces', MyEnlaces);
export default MyEnlaces;
