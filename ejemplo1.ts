// Diferentes estados que puede tener una persona.
enum Cara {
  Neutral,
  Feliz,
  Ebrio,
  Descompuesto
}

// Molde para generar personas:
class Persona {
  // Atributo:
  alcoholEnSangre: number;

  // Método:
  // Se ejecuta una unica vez, al momento de crear el objeto
  // con la palabra clave `new`
  constructor() {
    this.alcoholEnSangre = 0;
  }

  beber(bebida: Bebida) {
    this.alcoholEnSangre += bebida.graduacionAlcoholica;
    console.log(this.alcoholEnSangre);
  }

  verCara() {
    if (this.alcoholEnSangre == 0) {
      return this.cara(Cara.Neutral);
    }

    if (this.alcoholEnSangre <= 10) {
      return this.cara(Cara.Feliz);
    }

    if (this.alcoholEnSangre <= 20) {
      return this.cara(Cara.Ebrio);
    }

    return this.cara(Cara.Descompuesto);
  }

  cara(tipo: Cara) {
    if (tipo == Cara.Neutral) {
      return '🙂';
    }
    if (tipo == Cara.Feliz) {
      return '🤪';
    }
    if (tipo == Cara.Ebrio) {
      return '🥴';
    }
    if (tipo == Cara.Descompuesto) {
      return '🤮';
    }
  }

}


class Bebida {
  graduacionAlcoholica: number;

  constructor(alcohol: number) {
    this.graduacionAlcoholica = alcohol;
  }
}


// Instancias de una clase:
let juan = new Persona;
let ignacio = new Persona;




let agua = new Bebida(0);
let cerveza = new Bebida(5);

juan.beber(agua);
console.log(juan.verCara());
juan.beber(cerveza);
console.log(juan.verCara());
juan.beber(cerveza);
juan.beber(cerveza);
juan.beber(cerveza);
juan.beber(cerveza);
juan.beber(cerveza);
juan.beber(cerveza);
juan.beber(cerveza);
console.log(juan.verCara());
console.log(ignacio.verCara());



