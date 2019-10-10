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
  {
    path: 'greenstore',
    loadChildren: () => import('./store/store.module').then(m => m.StorePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import ('./rewards/rewards.module').then(m => m.RewardsPageModule)
  },
  { path: 'fitbit-dashboard/:loggedInUser', 
    loadChildren: () => import('./fitbit-dashboard/fitbit-dashboard.module').then(m => m.FitbitDashboardPageModule)
  },
  { path: 'azure-maps', 
    loadChildren: () => import('./azure-maps/azure-maps.module').then(m => m.AzureMapsPageModule)
  },
  { 
    path: 'green', 
    loadChildren: () => import('./green/green.module').then(m => m.GreenPageModule)
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
