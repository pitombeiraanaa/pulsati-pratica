import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { EmitirEventosComponent } from './pages/emitir-eventos/emitir-eventos.component';
import { ImcComponent } from './pages/imc/imc.component';

const routes: Routes = [
  {
    path: '',
    component: ImcComponent,
  },
  {
    path: 'diretivas',
    component: DiretivasComponent,
  },
  {
    path: 'emitir-eventos',
    component: EmitirEventosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
