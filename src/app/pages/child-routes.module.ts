// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainComponent } from './main/main.component';
import { PlayerComponent } from './player/player.component';

const childRoutes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'player', component: PlayerComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
