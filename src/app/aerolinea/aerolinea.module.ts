import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaListComponent } from './aerolinea-list/aerolinea-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AerolineaListComponent],
  declarations: [AerolineaListComponent]
})
export class AerolineaModule { }
