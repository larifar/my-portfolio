import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { ProjectItemComponent } from "../../components/project-item/project-item.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects = [
  {
    title: 'Projeto 1',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'assets/imgs/placeholder-img.svg',
    link: 'https://example.com',
  },
  {
    title: 'Projeto 2',
    description: 'description2',
    image: 'assets/imgs/placeholder-img.svg',
    link: 'https://example.com',
  },
  {
    title: 'Projeto 3',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'assets/imgs/placeholder-img.svg',
    link: 'https://example.com',
  }
];
}
