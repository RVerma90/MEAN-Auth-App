import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormsModule required, and must be added to imports for two-way data binding
import { FormsModule } from '@angular/forms';
// HttpModule required, and must be added to imports for Http request
import { HttpModule } from '@angular/http';
// MaterialModule from Material design
import { MaterialModule } from "@angular/material";
// BrowserAnimationsModule for animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// RouterModule, Routes for route setup
import { RouterModule, Routes } from '@angular/router';

// Page Compnents
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

// Services
import { ValidateService } from '././services/validate.service'
import { AuthService } from '././services/auth.service'

// AuthGuard allows access to routes/states to Dashboard/Profile only upon presence of token
import { AuthGuard } from './guards/auth.guard'

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
