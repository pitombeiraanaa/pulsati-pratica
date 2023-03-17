import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss'],
})
export class ImcComponent {
  altura: string = '';
  peso: string = '';
  resultado: string = '';

  calcularImc() {
    let altura: number = Number(this.altura);
    let peso: number = Number(this.peso);

    let imc: number = peso / (altura * altura);

    this.resultado = imc.toString();
  }

  changeAltura(event: KeyboardEvent) {
    this.altura = (event.target as HTMLInputElement).value;
  }
  changePeso(event: KeyboardEvent) {
    this.peso = (event.target as HTMLInputElement).value;
  }
}
