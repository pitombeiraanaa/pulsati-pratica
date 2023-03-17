import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcComponent } from './pages/imc/imc.component';
import { ResultadoComponent } from './pages/imc/components/resultado/resultado.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { EmitirEventosComponent } from './pages/emitir-eventos/emitir-eventos.component';
import { FilhoComponent } from './pages/emitir-eventos/components/filho/filho.component';

@NgModule({
  declarations: [AppComponent, ImcComponent, ResultadoComponent, DiretivasComponent, EmitirEventosComponent, FilhoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
