import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  icon: string;
  title: string;
  description: string;
  label: string;
  value: string;
  badge: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  cards: StatCard[] = [
    {
      icon: '📦',
      title: 'Installation Packages',
      description: 'Flexible service bundles from basic electrical to full smart home packages — priced for every budget and project scale.',
      label: 'Packages from',
      value: '₦50,000',
      badge: '93'
    },
    {
      icon: '⭐',
      title: 'Client Reviews',
      description: 'Consistently excellent feedback from residential and corporate clients across Nigeria. Reliability you can count on every time.',
      label: 'Happy clients',
      value: '500+',
      badge: '265'
    },
    {
      icon: '🏗️',
      title: 'Project Gallery',
      description: 'From smart apartments to factories — our portfolio spans residential, commercial, and industrial sectors nationwide.',
      label: 'Projects completed',
      value: '10+ years',
      badge: '71'
    }
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
