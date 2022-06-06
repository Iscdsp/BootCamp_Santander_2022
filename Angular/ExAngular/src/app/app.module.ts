import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuloServiceComponent } from './modulo-service/modulo-service.component';
import { PeopleServiceService } from './service/people-service.service';
import { RickAndMortyApiComponent } from './listApi/rick-and-morty-api/rick-and-morty-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ModuloServiceComponent,
    RickAndMortyApiComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [PeopleServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
