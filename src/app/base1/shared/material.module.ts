import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatToolbarModule, MatButtonModule, MatSlideToggleModule],
})
export class MaterialModule {}
