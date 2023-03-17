import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
})
export class FilhoComponent {
  @Output() dispararAlerta = new EventEmitter();

  textoDoAlerta = 'Alerta disparado pelo filho';

  emitirEvento() {
    this.dispararAlerta.emit(this.textoDoAlerta);
  }
}
