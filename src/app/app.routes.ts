import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './tabs/tabs.module#TabsPageModule'
    }
];

export const APP_ROUTES = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
});
