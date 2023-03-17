import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent {
  tamanhoFonteNgStyle = 30;

  ngStyle = {
    'font-size': this.tamanhoFonteNgStyle + 'px',
  };

  estaDevendo: boolean = true;

  trocarNgClass() {
    this.estaDevendo = !this.estaDevendo;
  }

  ngIfEstaMostrando = true;

  trocarNgIf() {
    this.ngIfEstaMostrando = !this.ngIfEstaMostrando;
  }

  ngSwitchCor = 'vermelhos';

  ngForValues = [
    { nome: 'Zézé', idade: 20 },
    { nome: 'Diego Bologinini', idade: 21 },
    { nome: 'Jaqueline Batista', idade: 22 },
  ];
}
