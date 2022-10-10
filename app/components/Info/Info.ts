class MyInfo extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./app/components/Info/style.css"
            <section>
            <div class="contenedor">
                <h1 class="info">¿No tienes una cuenta?</h1>
                <h1 class="descarga">Descarga la app</h1>
                <a href="https://www.youtube.com" class="registrate">Regístrate</a>
                <image class="descargaApp" src="./app/assets/descargaApp.png"></image>
            </div>
            </section>
            `;
        }
    }
}

customElements.define('my-info', MyInfo);
export default MyInfo;