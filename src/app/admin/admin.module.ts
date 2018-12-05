import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';

import { MaterialModule } from './material/material.module';

import { LayoutComponent } from './layout/layout.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, ToDoComponent, TreeComponent],
  imports: [SharedModule, MaterialModule, AdminRoutingModule ]
})
export class AdminModule {}
