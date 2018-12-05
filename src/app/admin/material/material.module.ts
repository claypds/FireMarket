import { NgModule } from '@angular/core';
import { MatGridListModule, MatTreeModule } from '@angular/material';

@NgModule({
  imports: [MatGridListModule, MatTreeModule],
  exports: [MatGridListModule, MatTreeModule]
})
export class MaterialModule {}
