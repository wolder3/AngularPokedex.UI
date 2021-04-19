import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPokemonComponent } from './components/listado-pokemon/listado-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path: 'pokemon/:id', component: PokemonComponent, pathMatch: 'full' },
  { path: '', component: ListadoPokemonComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
