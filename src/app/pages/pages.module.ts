// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ]
})
export class PagesModule { }
