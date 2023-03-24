import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  operacion: string = '+';
  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(): void {
    const num1 = parseFloat(this.numero1.toString());
    const num2 = parseFloat(this.numero2.toString());

    switch (this.operacion) {
      case '+':
        this.resultado = num1 + num2;
        break;
      case '-':
        this.resultado = num1 - num2;
        break;
      case '*':
        this.resultado = num1 * num2;
        break;
      case '/':
        this.resultado = num1 / num2;
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
  presionarBoton(event: MouseEvent): void {
    const boton = event.currentTarget as HTMLElement;
    boton.classList.add('pressed');
    setTimeout(() => {
      boton.classList.remove('pressed');
    }, 100);
  }
  

}

