import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'issues',
    loadChildren: () => import('./issues/issues.module').then( m => m.IssuesPageModule)
  },
  {

    path: 'prob1',

    loadChildren: () => import('./prob1/prob1.module').then( m => m.Prob1PageModule)

  },

  {

    path: 'prob2',

    loadChildren: () => import('./prob2/prob2.module').then( m => m.Prob2PageModule)

  },

  {

    path: 'prob3',

    loadChildren: () => import('./prob3/prob3.module').then( m => m.Prob3PageModule)

  },

  {

    path: 'prob4',

    loadChildren: () => import('./prob4/prob4.module').then( m => m.Prob4PageModule)

  },

  {

    path: 'prob5',

    loadChildren: () => import('./prob5/prob5.module').then( m => m.Prob5PageModule)

  },

  {

    path: 'prob6',

    loadChildren: () => import('./prob6/prob6.module').then( m => m.Prob6PageModule)

  },
  {
    path: 'helpus',
    loadChildren: () => import('./helpus/helpus.module').then( m => m.HelpusPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
