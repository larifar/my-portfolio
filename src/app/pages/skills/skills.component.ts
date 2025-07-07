import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SkillItemComponent } from "../../components/skill-item/skill-item.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillItemComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
skills = ["Angular", "Java", "Docker", "Git"]
}
