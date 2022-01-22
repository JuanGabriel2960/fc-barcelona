// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

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
    CommonModule,
    PipesModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    GamesComponent,
    HighlightsComponent
  ]
})
export class ComponentsModule { }
