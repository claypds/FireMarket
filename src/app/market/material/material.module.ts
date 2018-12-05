import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class MaterialModule {}
