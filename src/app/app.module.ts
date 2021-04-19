import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListadoPokemonComponent } from './components/listado-pokemon/listado-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListadoPokemonComponent, PokemonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [ApiEndpointsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
