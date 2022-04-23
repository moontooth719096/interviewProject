import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { VideocateforiesComponent } from './videocatefories/videocatefories.component';

const routes: Routes = [
  { path: '', component: DashbordComponent },
  { path: 'AV', component: VideocateforiesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
