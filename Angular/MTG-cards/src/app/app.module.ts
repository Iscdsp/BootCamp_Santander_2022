import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/header/nav-menu/nav-menu.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { TitleComponent } from './components/body/apresentantion/title/title.component';
import { TextApresentationComponent } from './components/body/apresentantion/text-apresentation/text-apresentation.component';
import { AboutColorsComponent } from './components/body/apresentantion/about-colors/about-colors.component';
import { FormFilterComponent } from './components/body/filter/form-filter/form-filter.component';
import { FilterTextComponent } from './components/body/filter/filter-text/filter-text.component';
import { CardListComponent } from './components/body/card-list/card-list.component';
import { ListCardComponent } from './components/body/list-card/list-card/list-card.component';
import { CardItemComponent } from './components/body/list-card/card-item/card-item.component';
import { ContainerDeckComponent } from './components/body/container-deck/container-deck/container-deck.component';
import { ItemCardDeckComponent } from './components/body/container-deck/card-list/item-card-deck/item-card-deck.component';
import { DeckPageComponent } from './components/deck-page/deck-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LogoComponent,
    TitleComponent,
    TextApresentationComponent,
    AboutColorsComponent,
    FormFilterComponent,
    FilterTextComponent,
    CardListComponent,
    ListCardComponent,
    CardItemComponent,
    ContainerDeckComponent,
    ItemCardDeckComponent,
    DeckPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
