import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Transparent, competitive rates with no hidden charges. We deliver maximum value for every naira spent on any project.'
    },
    {
      icon: '⭐',
      title: 'Client Reviews',
      description: 'Consistently rated top contractor for workmanship, reliability, and responsive service by hundreds of satisfied clients.'
    },
    {
      icon: '🛡️',
      title: 'Safe Work Practices',
      description: 'All jobs follow strict safety protocols. Fully insured and trained engineers, compliant with all applicable standards.'
    }
  ];
}
