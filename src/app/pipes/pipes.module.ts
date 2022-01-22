// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { SafePipe } from './safe/safe.pipe';


@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe
  ]
})
export class PipesModule { }
