import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { KycDetails } from './kyc-details/kyc-details';
import { BoothAssets } from './booth-assets/booth-assets';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'',component:Home},
    {path:'kyc',component:KycDetails},
    {path:'booth',component:BoothAssets}

];
