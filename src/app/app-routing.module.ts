import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  // path:'chat-view',
  path:'',
  loadChildren: () =>import("./full-view/full-view.module").then((m) => m.FullViewModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
