interface Forma2D {

  calcularArea() : number;

}

class Cuadrado implements Forma2D {

  lado: number;

  constructor (lado: number) {
    this.lado = lado;
  }

  public calcularArea() {
    return this.lado * this.lado;
  }
}

class Circulo implements Forma2D {

  radio: number;

  constructor (radio: number) {
    this.radio = radio;
  }

  public calcularArea() {
    return 3.1415 * this.radio * this.radio;
  }
}

class Rectangulo implements Forma2D {

  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  public calcularArea() {
    return this.base * this.altura;
  }
}

class Triangulo implements Forma2D {

  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  public calcularArea() {
    return this.base * this.altura / 2;
  }
}

class SumadorDeSuperficies {

  public sumar(forma1: Forma2D, forma2: Forma2D) {
    return forma1.calcularArea() + forma2.calcularArea();
  }
}

let sumador = new SumadorDeSuperficies();

let triangulito = new Triangulo(2, 3);
let cuadradito = new Cuadrado(2);
let circulito = new Circulo(10);

console.log(
  sumador.sumar(cuadradito, circulito)
);
