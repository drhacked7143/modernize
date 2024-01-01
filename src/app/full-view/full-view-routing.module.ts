import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarViewComponent } from './side-bar-view/side-bar-view.component';
import { ChatViewComponent } from './chat-view/chat-view.component';

const routes: Routes = [
  {
    component:ChatViewComponent,
    path:''

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullViewRoutingModule { }
