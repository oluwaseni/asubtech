import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from '../../components/packages/packages.component';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-packages-page',
  standalone: true,
  imports: [CommonModule, PackagesComponent],
  template: `
    <app-packages></app-packages>
  `
})
export class PackagesPageComponent implements OnInit {
  constructor(private scrollReveal: ScrollRevealService) {}

  ngOnInit(): void {
    setTimeout(() => this.scrollReveal.init(), 100);
  }
}
