import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '../../components/stats/stats.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, StatsComponent, FeaturesComponent],
  template: `
    <app-stats></app-stats>
    <app-features></app-features>
  `
})
export class AboutPageComponent implements OnInit {
  constructor(private scrollReveal: ScrollRevealService) {}

  ngOnInit(): void {
    setTimeout(() => this.scrollReveal.init(), 100);
  }
}
