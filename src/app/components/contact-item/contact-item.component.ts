import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
@Input() contact: String ="";
@Input() image: String = "assets/imgs/placeholder-img.svg";
@Input() link: String = "";
}
