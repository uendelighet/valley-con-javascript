import { iniciarSesion, obtenerUsuarioActual } from "./utils.js";

const render = () => {
    const usuarioActual = obtenerUsuarioActual();

    if (usuarioActual !== null) {
        window.location.href = "index.html";
        return;
    }

    const loginForm = document.querySelector("#login");

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const usuario = iniciarSesion(email, password);

        if (usuario === null) {
            alert('Nombre de usuario y/o contraseña incorrectos');
            return;
        }

        // Almacena el usuario actual en localStorage después de iniciar sesión correctamente
        localStorage.setItem("usuarioActual", JSON.stringify(usuario));

        window.location.href = "index.html";
    });
}

window.onload = render;
