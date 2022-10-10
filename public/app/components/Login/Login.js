class MyLogin extends HTMLElement {
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
            <link rel="stylesheet" href=" ./app/components/Login/style.css"
            <section>
            <div class="contenedor">
                <image class="logo" src="./app/assets/logo.png"></image>
                <image class="opciones" src="./app/assets/opciones.png"></image>
                <input class="correo" type="email" placeholder="Teléfono, usuario o correo electrónico">
                <input class="contraseña" type="password" placeholder="Contraseña">
                <button class="iniciar" type="submit">Iniciar sesión</button>
            </div>
            </section>
            `;
        }
    }
}
customElements.define('my-login', MyLogin);
export default MyLogin;
