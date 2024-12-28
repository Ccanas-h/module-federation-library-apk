import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsSearchComponent } from './flights/flights-search/flights-search.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: '/flights-search', component: FlightsSearchComponent},

];
