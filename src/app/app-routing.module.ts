import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideocateforiesComponent } from './videocatefories/videocatefories.component';

const routes: Routes = [
  { path: 'AV', component: VideocateforiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
