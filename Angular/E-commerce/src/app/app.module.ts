import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './oomponents/shared/header/header.component';
import { FooterComponent } from './oomponents/shared/footer/footer.component';
import { NavComponent } from './oomponents/shared/nav/nav.component';
import { BookstoreAppComponent } from './oomponents/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './oomponents/bookstore-app/filters/filters.component';
import { ProductionListComponent } from './oomponents/bookstore-app/production-list/production-list.component';
import { ProductionItemComponent } from './oomponents/bookstore-app/production-list/production-item/production-item.component';
import { ProductionListService } from './oomponents/bookstore-app/production-list/production-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductionListComponent,
    ProductionItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductionListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
