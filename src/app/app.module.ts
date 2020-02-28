import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ZombiesComponent } from './pages/zombies/zombies.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { RegisterComponent } from './pages/register/register.component';
import { CerebrosComponent } from './pages/cerebros/cerebros.component';
import { appRouting } from './app.routes';
import { TitleComponent } from './shared/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    ZombiesComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraphsComponent,
    HeaderComponent,
    SidemenuComponent,
    SettingsComponent,
    RegisterComponent,
    CerebrosComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
