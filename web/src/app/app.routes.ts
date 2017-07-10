import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/account/login/login.component';
import { SiginComponent } from './pages/account/sigin/sigin.component';


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
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sigin',
        component: SiginComponent
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
