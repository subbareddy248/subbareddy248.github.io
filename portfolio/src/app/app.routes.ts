import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResearchComponent } from './pages/research/research.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', redirectTo: '' }
];
