import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../_models/Project';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent {
  
  @Input() Project = {} as Project;

  constructor(private modalService: NgbModal) {}

  // Open modal
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
