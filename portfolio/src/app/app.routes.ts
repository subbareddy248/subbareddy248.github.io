import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ActivitiesComponent } from './pages/activities/activities.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: '404', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
