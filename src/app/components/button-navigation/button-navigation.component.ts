import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button-navigation',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './button-navigation.component.html',
  styleUrl: './button-navigation.component.css'
})
export class ButtonNavigationComponent {
  @Input() page: string = "";
  @Input() to!: string;

}
