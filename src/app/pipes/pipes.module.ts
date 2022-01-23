// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { SafePipe } from './safe/safe.pipe';
import { PreviewPipe } from './preview/preview.pipe';


@NgModule({
  declarations: [
    SafePipe,
    PreviewPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    PreviewPipe
  ]
})
export class PipesModule { }
