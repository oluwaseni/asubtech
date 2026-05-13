import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Packages', id: 'packages' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Get a Quote', id: 'contact' },
  ];

  services = [
    'Electrical Wiring',
    'Smart Home Automation',
    'Solar Panel Installation',
    'Industrial Cabling',
    'Generator Setup',
    'CCTV & Security',
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
