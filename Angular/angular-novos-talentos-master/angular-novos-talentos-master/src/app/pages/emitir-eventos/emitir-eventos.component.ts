import { Component } from '@angular/core';

@Component({
  selector: 'app-emitir-eventos',
  templateUrl: './emitir-eventos.component.html',
  styleUrls: ['./emitir-eventos.component.scss'],
})
export class EmitirEventosComponent {
  EmitirAlertaDoFilho(value: any) {
    alert(value);
  }
}
