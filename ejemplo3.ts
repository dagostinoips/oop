import { readFileSync } from 'fs';


class RegistroUsuario {

  validadores: Array<ValidadorRegistro>;

  constructor(validadores: Array<ValidadorRegistro>) {
    this.validadores = validadores;
  }

  public registrarUsuario(usuario: string, clave: string) {
    let errores = [];
    this.validadores.forEach(function (validador) {

      var error = validador.validar(usuario, clave);

      if (error && error.length > 0) {
        errores.push(error);
      }
    });
    return errores;
  }

}



interface ValidadorRegistro {

  validar(usuario: string, clave: string) : string | null;

}






class LongitudClave implements ValidadorRegistro {

  longitudMinimaClave: number

  constructor(longitud: number = 8) {
    this.longitudMinimaClave = longitud;
  }

  validar(usuario: string, clave: string) : string | null {
    if (clave.length < this.longitudMinimaClave) {
      return  `La clave tiene que ser de al menos ${this.longitudMinimaClave} caracteres.`;
    }
  }
}





class MismoUsuarioQueClave implements ValidadorRegistro {

  validar(usuario: string, clave: string) : string | null {
    if (clave == usuario) {
      return 'La clave y el usuario no pueden ser iguales';
    }
  }
}


class UsuarioExiste implements ValidadorRegistro {

  validar(usuario: string, clave: string) : string | null {
    try {
      let usuarios = readFileSync('usuario.txt','utf8').split('\n');
      if (usuarios.indexOf(usuario)) {
        return ('El usuario que quiere registrar ya existe, por favor elija otro nombre de usuario');
      }
    }
    catch (err) {
      // El archivo usuarios.txt no existe,
      // por lo tanto aun no hay usuarios creados.
    }
    return null;
  }

}





class UsuarioSubCadenaDeClave implements ValidadorRegistro {

  validar(usuario: string, clave: string) : string | null {
    if (clave.indexOf(usuario) != -1) {
      return 'El usuario no puede estar incluido en la contraseña';
    }
  }
}


class LetrasyNumeros implements ValidadorRegistro {

  validar(usuario: string, clave: string) : string | null {
      ////.....
  }
}


let validadores = [
  new UsuarioSubCadenaDeClave(),
  new MismoUsuarioQueClave(),
  new UsuarioExiste(),
  new LongitudClave(12),
  new LetrasyNumeros(),
];
let registro = new RegistroUsuario(validadores);
console.log(registro.registrarUsuario('juan', 'juancho'));

let reglas = [
  new MismoUsuarioQueClave(),
  new LongitudClave(8),
];
let cambioDeClave = new RegistroUsuario(reglas);












