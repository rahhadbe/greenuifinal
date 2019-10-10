import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'logactivity',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'fitbit-dashboard', 
    loadChildren: () => import('./fitbit-dashboard/fitbit-dashboard.module').then(m => m.FitbitDashboardPageModule)
  },
  { path: 'azure-maps', 
    loadChildren: () => import('./azure-maps/azure-maps.module').then(m => m.AzureMapsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
