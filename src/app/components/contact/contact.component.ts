import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  // Corrected to styleUrls
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio - Contact');
  }

  onSubmit(form: any) {
    // Handle form submission
    console.log('Form submitted:', form);
  }
}
