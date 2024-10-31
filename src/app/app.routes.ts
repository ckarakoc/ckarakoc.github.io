import { Routes } from '@angular/router';
import { PageNotFoundComponent } from "./core/pages/desktop/page-not-found/page-not-found.component";
import { LoginComponent } from "./core/components/login/login.component";
import { MacosComponent } from "./core/pages/desktop/macos/macos.component";


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'desktop', component: MacosComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
