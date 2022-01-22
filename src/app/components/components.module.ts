// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentsModule { }
