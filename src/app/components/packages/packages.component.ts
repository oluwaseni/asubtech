import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PACKAGE_DATA, PackageCategory } from '../../models/package-data.model';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {
  categories: PackageCategory[] = PACKAGE_DATA;
  activeKey = 'residential';

  get activeItems(): string[] {
    return this.categories.find(c => c.key === this.activeKey)?.items ?? [];
  }

  selectTab(key: string): void {
    this.activeKey = key;
  }
}
