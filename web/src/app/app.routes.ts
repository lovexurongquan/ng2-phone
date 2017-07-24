import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';


export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'account',
        loadChildren: './pages/account/account.module#AccountModule'
    },
    {
        path: '**',//fallback router must in the last
        component: HomeComponent
    }
]
