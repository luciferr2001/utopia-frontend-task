import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelTableRoutingModule } from './panel-table-routing.module';
import { PanelTableComponent } from './panel-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../common/shared.module';


@NgModule({
  declarations: [
    PanelTableComponent
  ],
  imports: [
    CommonModule,
    PanelTableRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
  ]
})
export class PanelTableModule { }
