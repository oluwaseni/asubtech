import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

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
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  cards: StatCard[] = [
    {
      icon: 'box',
      title: 'Installation Packages',
      description: 'Flexible service bundles from basic electrical to full smart home packages — priced for every budget and project scale.',
      label: 'Packages from',
      value: '₦50,000',
      badge: '93'
    },
    {
      icon: 'star',
      title: 'Client Reviews',
      description: 'Consistently excellent feedback from residential and corporate clients across Nigeria. Reliability you can count on every time.',
      label: 'Happy clients',
      value: '500+',
      badge: '265'
    },
    {
      icon: 'building',
      title: 'Project Gallery',
      description: 'From smart apartments to factories — our portfolio spans residential, commercial, and industrial sectors nationwide.',
      label: 'Projects completed',
      value: '10+ years',
      badge: '71'
    }
  ];
}
