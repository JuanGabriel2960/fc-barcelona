// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

// Components
import { MainComponent } from './main/main.component';
import { PlayerComponent } from './player/player.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    MainComponent,
    PlayerComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
