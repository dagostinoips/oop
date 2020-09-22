import { readFileSync } from 'fs';

class RegistroUsuario {

  public registrarUsuario(usuario: string, clave: string) {
    let errores = [];
    if (usuario == clave) {
      errores.push('El usuario y la clave no pueden ser iguales.');
    }
    if (clave.length < 9) {
      errores.push('La clave tiene que ser de al menos 8 caracteres.');
    }
    if (clave.indexOf(usuario) != -1) {
      errores.push('La clave no puede incluir el usuario como parte de la misma.');
    }
    try {
      let usuarios = readFileSync('usuario.txt','utf8').split('\n');
      if (usuarios.indexOf(usuario)) {
        errores.push('El usuario que quiere registrar ya existe, por favor elija otro nombre de usuario');
      }
    }
    catch (err) {
      // El archivo usuarios.txt no existe,
      // por lo tanto aun no hay usuarios creados.
    }
    return errores;
  }
}

let registro = new RegistroUsuario();
console.log(registro.registrarUsuario('juan', 'juancho'));
