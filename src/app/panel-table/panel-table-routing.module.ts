import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelTableComponent } from './panel-table.component';

const routes: Routes = [
  {path:'',component:PanelTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelTableRoutingModule { }
