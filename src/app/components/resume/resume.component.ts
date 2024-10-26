import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  isActive = false; // Track whether the resume information is active

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('PortFolio-Resume');
  }

  toggleResume() {
    this.isActive = !this.isActive; // Toggle the visibility of resume information
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }
}
