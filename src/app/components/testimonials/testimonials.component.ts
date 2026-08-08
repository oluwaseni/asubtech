import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  stars = [1, 2, 3, 4, 5];

  testimonials: Testimonial[] = [
    {
      quote: 'ASU B TECH rewired our entire apartment and set up smart lighting in under a week. Clean work, no shortcuts, and they explained every step.',
      name: 'Adaeze O.',
      role: 'Homeowner, Lagos',
      rating: 5
    },
    {
      quote: 'We’ve used them for CCTV and fire alarm installs across three of our branches. Reliable team, always on schedule and within budget.',
      name: 'Chinedu K.',
      role: 'Facility Manager, Abuja',
      rating: 5
    },
    {
      quote: 'Professional from quote to completion. Our generator and industrial cabling upgrade was handled with real attention to safety standards.',
      name: 'Grace T.',
      role: 'Business Owner, Port Harcourt',
      rating: 4
    }
  ];
}
