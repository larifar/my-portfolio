import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
  {path:'', redirectTo: 'aboutme', pathMatch: 'full'},
  {path:'aboutme', component: AboutMeComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'skills', component: SkillsComponent},
  {path:'contact', component: ContactComponent},
];
