import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { PackagesComponent } from '../../components/packages/packages.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FeaturesComponent,
    PackagesComponent,
    StatsComponent,
    GalleryComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-features></app-features>
    <app-packages></app-packages>
    <app-stats></app-stats>
    <app-gallery></app-gallery>
    <app-contact></app-contact>
  `
})
export class HomeComponent implements OnInit {
  constructor(private scrollReveal: ScrollRevealService) {}

  ngOnInit(): void {
    // Small delay to allow DOM to render before observing
    setTimeout(() => this.scrollReveal.init(), 100);
  }
}
