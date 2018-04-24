import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {ValidateService} from './services/validate.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './guard/auth.guard';
import {NoAuthGuard} from './guard/NoAuth.guard';

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent,canActivate:[NoAuthGuard]},
  {path:'register',component:RegisterComponent,canActivate:[NoAuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'quotes',component:QuotesComponent,canActivate:[AuthGuard]},
  

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    QuotesComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ValidateService,AuthService,AuthGuard,NoAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
