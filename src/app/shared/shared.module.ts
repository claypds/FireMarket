import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LayoutModule, DragDropModule, MaterialModule],
  exports: [CommonModule, ReactiveFormsModule, LayoutModule, DragDropModule, MaterialModule]
})
export class SharedModule {}
