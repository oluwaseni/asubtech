import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceBreakdownComponent } from '../../components/service-breakdown/service-breakdown.component';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, ServiceBreakdownComponent],
  template: `
    <app-service-breakdown></app-service-breakdown>
  `
})
export class ServicesPageComponent implements OnInit {
  constructor(private scrollReveal: ScrollRevealService) {}

  ngOnInit(): void {
    setTimeout(() => this.scrollReveal.init(), 100);
  }
}
