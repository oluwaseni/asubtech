import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { SERVICES, ServiceDetail } from '../../models/service-data.model';

@Component({
  selector: 'app-service-breakdown',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './service-breakdown.component.html',
  styleUrls: ['./service-breakdown.component.scss']
})
export class ServiceBreakdownComponent {
  /** Compact mode: a shorter icon-card grid for the homepage, instead of the full image breakdown. */
  @Input() compact = false;
  /** Cap the number of services shown (used by the homepage preview). */
  @Input() limit: number | null = null;

  services: ServiceDetail[] = SERVICES;

  get shown(): ServiceDetail[] {
    return this.limit ? this.services.slice(0, this.limit) : this.services;
  }
}
