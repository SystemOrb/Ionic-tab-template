import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './tabs/tabs.module#TabsPageModule'
    },
    {
        path: 'home',
        loadChildren: './pages/lista/lista.module#ListaPageModule'
    },
    {
        path: 'info',
        loadChildren: './pages/info/info.module#InfoPageModule'
    }
];

export const APP_ROUTES = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
});
