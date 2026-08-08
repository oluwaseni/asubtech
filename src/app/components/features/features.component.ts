import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: 'cash',
      title: 'Affordable Pricing',
      description: 'Transparent, competitive rates with no hidden charges. We deliver maximum value for every naira spent on any project.'
    },
    {
      icon: 'star',
      title: 'Client Reviews',
      description: 'Consistently rated top contractor for workmanship, reliability, and responsive service by hundreds of satisfied clients.'
    },
    {
      icon: 'shield',
      title: 'Safe Work Practices',
      description: 'All jobs follow strict safety protocols. Fully insured and trained engineers, compliant with all applicable standards.'
    }
  ];
}
