import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideocateforiesComponent } from './pages/videocatefories/videocatefories.component';
// import { DashbordComponent } from './pages/dashbord/dashbord.component';
// import { VideocateforiesComponent } from './pages/videocatefories/videocatefories.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule)
  },
  // { path: 'AV', component: VideocateforiesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
