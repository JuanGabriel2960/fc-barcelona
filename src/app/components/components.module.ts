// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { HighlightsComponent } from './highlights/highlights.component';


@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    GamesComponent,
    HighlightsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    GamesComponent,
    HighlightsComponent
  ]
})
export class ComponentsModule { }
