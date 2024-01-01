import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullViewRoutingModule } from './full-view-routing.module';
import { SideBarViewComponent } from './side-bar-view/side-bar-view.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    SideBarViewComponent,
    ChatViewComponent,
    HeaderBarComponent
  ],
  imports: [
    CommonModule,
    FullViewRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
  ],
  // providers:[
  //   MatFormFieldControl
  // ]
})
export class FullViewModule { }
