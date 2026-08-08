import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GALLERY_ITEMS, GalleryItem } from '../../models/gallery-data.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  /** Compact mode: hides filters + the "get a quote" CTA, shows a "View Full Gallery" link instead. Used on the homepage. */
  @Input() compact = false;
  /** Cap the number of items shown (e.g. a homepage preview strip). Ignored when not set. */
  @Input() limit: number | null = null;

  activeFilter = 'All';

  filters = ['All', 'Electrical', 'Smart Home', 'Industrial', 'Solar'];

  items: GalleryItem[] = GALLERY_ITEMS;

  get filtered(): GalleryItem[] {
    const list = this.activeFilter === 'All'
      ? this.items
      : this.items.filter(i => i.category === this.activeFilter);
    return this.limit ? list.slice(0, this.limit) : list;
  }
}
