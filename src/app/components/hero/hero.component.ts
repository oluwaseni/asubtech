import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  services = [
    'Smart Home Setup', 'DSTV Installation',
    'CCTV & Security', 'Electrical Wiring',
    'Fire Alarm Systems', 'Intercom & Data',
    'Automation', 'Repairs & Fittings',
    'Industrial Works', 'Domestic Works'
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
