import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CedictComponent } from './components/cedict/cedict.component';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { GamesComponent } from './components/games/games.component';

const routes: Routes = [
    { path: 'home', pathMatch: 'full', component: HomeComponent, data: { state: 'home' } },
    { path: 'projects', pathMatch: 'full', component: ProjectsComponent, data: { state: 'projects' } },
    { path: 'cedict', pathMatch: 'full', component: CedictComponent, data: { state: 'cedict' } },
    { path: 'games', pathMatch: 'full', component: GamesComponent, data: { state: 'games' } },
    { path: 'artwork', pathMatch: 'full', component: ArtworkComponent, data: { state: 'artwork' } },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: PageNotFoundComponent, data: { state: 'notfound' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
