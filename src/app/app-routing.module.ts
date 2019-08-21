import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'film/:id',
    component: FilmComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
