import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'; 

import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { ProductComponent } from './product/product.component';

export const appRoutes: Routes = [
    { path: 'database', component: DatabaseComponent },
    { path: 'home',      component: HomeComponent },
    { path: 'product',      component: ProductComponent },
    // {
    //   path: 'heroes',
    //   component: HeroListComponent,
    //   data: { title: 'Heroes List' }
    // },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];

  export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);