import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { ZombiesComponent } from './pages/zombies/zombies.component';
import { RegisterComponent } from './pages/register/register.component';
import { CerebrosComponent } from './pages/cerebros/cerebros.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'zombies', component: ZombiesComponent },
    { path: 'cerebros', component: CerebrosComponent },
    { path: '**', pathMatch:'full', component: NopagefoundComponent },
];

export const appRouting = RouterModule.forRoot(routes);