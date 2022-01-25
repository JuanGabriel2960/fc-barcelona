// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { SafePipe } from './safe/safe.pipe';
import { PreviewPipe } from './preview/preview.pipe';
import { AgePipe } from './age/age.pipe';


@NgModule({
  declarations: [
    SafePipe,
    PreviewPipe,
    AgePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    PreviewPipe,
    AgePipe
  ]
})
export class PipesModule { }
