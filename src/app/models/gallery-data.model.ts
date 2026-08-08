export interface GalleryItem {
  src: string;
  label: string;
  category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: 'assets/images/gallery/panel-installation.jpg', label: 'Panel Installation', category: 'Electrical' },
  { src: 'assets/images/gallery/smart-home-wiring.jpg', label: 'Smart Home Wiring', category: 'Smart Home' },
  { src: 'assets/images/gallery/solar-array.jpg', label: 'Solar Panel Array', category: 'Solar' },
  { src: 'assets/images/gallery/industrial-cabling.jpg', label: 'Industrial Cabling', category: 'Industrial' },
  { src: 'assets/images/gallery/generator-setup.jpg', label: 'Generator Setup', category: 'Electrical' },
  { src: 'assets/images/gallery/smart-lighting.jpg', label: 'Smart Lighting Control', category: 'Smart Home' },
  { src: 'assets/images/gallery/control-room.jpg', label: 'Control Room Fit-out', category: 'Industrial' },
  { src: 'assets/images/gallery/rooftop-solar.jpg', label: 'Rooftop Solar Install', category: 'Solar' },
  { src: 'assets/images/gallery/office-electrical.jpg', label: 'Office Electrical Works', category: 'Electrical' },
];
