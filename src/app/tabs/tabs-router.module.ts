import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabsRoutingModule } from './tabs.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class TabsRouterModule { }
