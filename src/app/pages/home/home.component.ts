import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiceBreakdownComponent } from '../../components/service-breakdown/service-breakdown.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BookNowComponent } from '../../components/book-now/book-now.component';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServiceBreakdownComponent,
    GalleryComponent,
    TestimonialsComponent,
    BookNowComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-service-breakdown [compact]="true" [limit]="6"></app-service-breakdown>
    <app-gallery [compact]="true" [limit]="6"></app-gallery>
    <app-testimonials></app-testimonials>
    <app-book-now></app-book-now>
  `
})
export class HomeComponent implements OnInit {
  constructor(private scrollReveal: ScrollRevealService) {}

  ngOnInit(): void {
    // Small delay to allow DOM to render before observing
    setTimeout(() => this.scrollReveal.init(), 100);
  }
}
