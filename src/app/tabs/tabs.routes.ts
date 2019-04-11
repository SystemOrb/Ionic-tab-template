import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';


const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'tab1',
          children: [
            {
              path: '',
              loadChildren: '../tab1/tab1.module#Tab1PageModule'
            }
          ]
        },
        {
          path: 'tab2',
          children: [
            {
              path: '',
              loadChildren: '../tab2/tab2.module#Tab2PageModule'
            }
          ]
        },
        {
          path: 'tab3',
          children: [
            {
              path: '',
              loadChildren: '../tab3/tab3.module#Tab3PageModule'
            }
          ]
        },
        {
          path: '',
          pathMatch: 'full',
          redirectTo: '/tabs/tab1'
        }
      ]
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/tabs/tab1'
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule {}