// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';

// Components
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { StatsComponent } from './stats/stats.component';
import { BioComponent } from './bio/bio.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    GamesComponent,
    HighlightsComponent,
    StatsComponent,
    BioComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    GamesComponent,
    HighlightsComponent,
    StatsComponent,
    BioComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }
