import { readFileSync } from 'fs';

class RegistroUsuario {

  errores =  [];

  public registrarUsuario(usuario: string, clave: string) {
    this.usuarioClaveDiferentes(usuario, clave);
    this.longitudMinimaClave(clave, 9);
    this.usuarioSubcadenaDeClave(usuario, clave);
    this.usuarioNoExisteAun(usuario);
    return this.errores;
  }

  protected usuarioClaveDiferentes(usuario: string, clave: string) {
    if (usuario == clave) {
      this.errores.push('El usuario y la clave no pueden ser iguales.');
    }
  }

  protected longitudMinimaClave(clave: string, n: number) {
    if (clave.length < n) {
      this.errores.push('La clave tiene que ser de al menos 8 caracteres.');
    }
  }

  protected usuarioSubcadenaDeClave(usuario: string, clave: string) {
    if (clave.indexOf(usuario) != -1) {
      this.errores.push('La clave no puede incluir el usuario como parte de la misma.');
    }
  }

  protected usuarioNoExisteAun(usuario) {
    try {
      let usuarios = readFileSync('usuario.txt','utf8').split('\n');
      if (usuarios.indexOf(usuario)) {
        this.errores.push('El usuario que quiere registrar ya existe, por favor elija otro nombre de usuario');
      }
    }
    catch (err) {
      // El archivo usuarios.txt no existe,
      // por lo tanto aun no hay usuarios creados.
    }
  }
}

let registro = new RegistroUsuario();
console.log(registro.registrarUsuario('juan', 'hola'));
