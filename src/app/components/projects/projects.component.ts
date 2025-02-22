import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/Project';
import { Tag } from '../../_models/Tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'] // Fixed typo: 'styleUrl' to 'styleUrls'
})
export class ProjectsComponent {
  project: Project[] = [
    { id: 0, name: "Sample Python Project", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: [Tag.PYTHON] },
    { id: 1, name: "Sample Angular App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS] },
    { id: 2, name: "Sample .Net App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: [Tag.REACT, Tag.CSHARP, Tag.ASPNET] },
    { id: 3, name: "Web API Project", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: [Tag.CSHARP, Tag.ASPNET] },
    { id: 4, name: "Chrome Extension", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: [Tag.JAVASCRIPT] },
    { id: 5, name: "Mobile App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: [Tag.JAVA] }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('PortFolio-Projects');
  }
}
