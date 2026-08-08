import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  template: `
    <app-gallery></app-gallery>
  `
})
export class GalleryPageComponent implements OnInit {
  constructor(private scrollReveal: ScrollRevealService) {}

  ngOnInit(): void {
    setTimeout(() => this.scrollReveal.init(), 100);
  }
}
