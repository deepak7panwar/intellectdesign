/*
 *created by deepak panwar
 *contact no:9999190591
 */

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about/:id', component: AboutComponent }
];

export const ROUTING = RouterModule.forRoot(ROUTES);
