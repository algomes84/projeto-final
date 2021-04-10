import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
/* Define as constantes utilizadas 
para identificar as opeções de calculo*/

static readonly SOMA: string = '+';
static readonly SUBTRACAO: string = '-';
static readonly DIVISAO: string = '/';
static readonly MULTIPLICACAO: string = '*';

constructor() { }

/* Metodo que calcula as operações matemáticas
dado dois números 
Suporta as operações soma, subtração, multiplicação e divisão

@param1 num1 number
@param2 num2 number
@param3 operacao string
@return number resultado da operação

*/

  calcular (num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazera o resultado da operacao

    switch (operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
