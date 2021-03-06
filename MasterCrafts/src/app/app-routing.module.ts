import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'easy-crochet',
    loadChildren: () => import('./easy-crochet/easy-crochet.module').then( m => m.EasyCrochetPageModule)
  },
  {
    path: 'med-crochet',
    loadChildren: () => import('./med-crochet/med-crochet.module').then( m => m.MedCrochetPageModule)
  },
  {
    path: 'hard-crochet',
    loadChildren: () => import('./hard-crochet/hard-crochet.module').then( m => m.HardCrochetPageModule)
  },
  {
    path: 'saved-crochet',
    loadChildren: () => import('./saved-crochet/saved-crochet.module').then( m => m.SavedCrochetPageModule)
  },
  {
    path: 'share-crochet',
    loadChildren: () => import('./share-crochet/share-crochet.module').then( m => m.ShareCrochetPageModule)
  },
  {
    path: 'easy-pattern',
    loadChildren: () => import('./easy-pattern/easy-pattern.module').then( m => m.EasyPatternPageModule)
  },
  {
    path: 'med-pattern',
    loadChildren: () => import('./med-pattern/med-pattern.module').then( m => m.MedPatternPageModule)
  },
  {
    path: 'hard-pattern',
    loadChildren: () => import('./hard-pattern/hard-pattern.module').then( m => m.HardPatternPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
