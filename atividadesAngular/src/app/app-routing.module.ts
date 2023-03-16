import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercadoLivreComponent } from './pages/mercado-livre/mercado-livre.component';

const routes: Routes = [
  {
    path: '',
    component: MercadoLivreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
