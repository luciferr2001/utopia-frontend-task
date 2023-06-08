import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home', pathMatch:'full',
  },
  { path:'home',component:HomeComponent,pathMatch:'full'},
  { path: 'panel-table', loadChildren: () => import('./panel-table/panel-table.module').then(m => m.PanelTableModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
