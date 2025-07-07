import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ContactItemComponent } from "../../components/contact-item/contact-item.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent, NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
contacts = [
  {contact: "larifar",
    link:"https://github.com/larifar",
    image:"assets/imgs/github.svg",
  },
  {contact: "linkedin",
    link:"https://www.linkedin.com/in/larissa-faria-silva-816692251",
    image:"assets/imgs/linkedin.svg",
  },
  {contact: "lari.f4ria@gmail.com",
    link:"mailto:lari.f4ria@gmail.com",
    image:"assets/imgs/mail.svg",
  },
]
}
