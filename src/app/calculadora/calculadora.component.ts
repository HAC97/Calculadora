import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  operacion: string = '';
  resultado: number = 0;

  agregarNumero(numero: number) {
    if (this.operacion === '') {
      this.numero1 = this.numero1 * 10 + numero;
    } else {
      this.numero2 = this.numero2 * 10 + numero;
    }
    this.resultado = 0;
  }
  seleccionarOperacion(operacion: string) {
    this.operacion = operacion;
  }
  calcular() {
    switch (this.operacion) {
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;
      case '/':
        this.resultado = this.numero1 / this.numero2;
        break;
      default:
        this.resultado = 0;
        break;
    }
    this.numero1 = this.resultado;
    this.numero2 = 0;
    this.operacion = '';
  }
  borrarTodo() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.operacion = '';
    this.resultado = 0;
  }
    
}
