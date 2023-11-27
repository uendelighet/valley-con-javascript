import { usuarioExiste, registrarUsuario, obtenerUsuarioActual } from "./utils.js";

const render = () => {
    const usuarioActual = obtenerUsuarioActual();

    if (usuarioActual !== null) {
        window.location.href = "index.html";
        return;
    }
    
    const formulario = document.querySelector('#registro');

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if(usuarioExiste(email) === true) {
            alert('El usuario ya existe');
            return;
        }

        registrarUsuario(email, password);

        alert('Usuario registrado con éxito');

        window.location.href = "login.html";
    });
}

window.onload = render;
