import { NgIf } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

import { ButtonNavigationComponent } from './components/button-navigation/button-navigation.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, ButtonNavigationComponent, NgIf, AboutMeComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'project_my-portfolio';
  showMenu = false;

  activeSection = 'aboutme';

  sectionNames: { [key: string]: string } = {
    aboutme: 'Sobre mim',
    projects: 'Projetos',
    skills: 'Habilidades',
    contact: 'Contato'
  };

  ngAfterViewInit() {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['aboutme', 'projects', 'skills', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
}
