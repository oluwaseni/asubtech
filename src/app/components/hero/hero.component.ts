import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
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
}
