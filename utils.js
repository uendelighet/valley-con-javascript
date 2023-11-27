const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem("usuarios");

    if(usuarios === null) {
        return [];
    }

    return JSON.parse(usuarios);
}

export const usuarioExiste = (email) => {
    const usuarios = obtenerUsuarios();

    for (const usuario of usuarios) {
        if(usuario.email === email) {
            return true;
        }
    }

    return false;
}

export const registrarUsuario = (email, password) => {
    const usuarios = obtenerUsuarios();

    const usuario = {
        email: email,
        password: password
    }

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

export const iniciarSesion = (email, password) => {
    const usuarios = obtenerUsuarios();

    for (const usuario of usuarios) {
        if (usuario.email === email && usuario.password === password) {
            localStorage.setItem("usuarioActual", usuario.email);
            return usuario;
        }
    }

    return null;
}

export const obtenerUsuarioActual = () => {
    const email = localStorage.getItem("usuarioActual");
    return email;
}

export const cerrarSesion = () => {
    localStorage.removeItem("usuarioActual");
}