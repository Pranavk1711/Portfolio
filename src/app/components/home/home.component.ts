import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio - Home');
  }

  ngAfterViewInit() {
    const options = {
      strings: ['Web Developer', 'App Developer', 'Web Designer'],
      typeSpeed: 50,
    };

    const typed = new Typed(this.typedElement.nativeElement, options);

    return () => {
      typed.destroy();
    };
  }
}
