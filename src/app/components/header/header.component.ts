import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private route: ActivatedRoute) {}
  openModal: boolean = false;

  toggle(): void {
    this.openModal = !this.openModal;
  }
}
