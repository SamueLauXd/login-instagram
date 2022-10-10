class MyGif extends HTMLElement {

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
            <link rel="stylesheet" href=" ./app/components/Gif/style.css"
            <section>
            <div class="contenedor">
                <img class="gif" src="./app/assets/telefono.png"></img>
            </div>
            </section>
            `;
        }
    }
}

customElements.define('my-gif', MyGif);
export default MyGif;