import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesPageComponent } from './pages/services/services.component';
import { PackagesPageComponent } from './pages/packages/packages.component';
import { AboutPageComponent } from './pages/about/about.component';
import { GalleryPageComponent } from './pages/gallery/gallery.component';
import { ContactPageComponent } from './pages/contact/contact.component';

const SITE = 'ASU B TECH';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: `${SITE} – Electrical & Mechanical Engineering` },
  { path: 'services', component: ServicesPageComponent, title: `Services | ${SITE}` },
  { path: 'packages', component: PackagesPageComponent, title: `Packages | ${SITE}` },
  { path: 'about', component: AboutPageComponent, title: `About | ${SITE}` },
  { path: 'gallery', component: GalleryPageComponent, title: `Gallery | ${SITE}` },
  { path: 'contact', component: ContactPageComponent, title: `Contact | ${SITE}` },
  { path: '**', redirectTo: '' }
];
