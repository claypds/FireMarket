import { NgModule } from '@angular/core';

import {
  MatSnackBarModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSnackBarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatSnackBarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule {}
