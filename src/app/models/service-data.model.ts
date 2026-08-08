export interface ServiceDetail {
  icon: string;
  title: string;
  tag: string;
  image: string;
  summary: string;
  features: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    icon: 'home',
    title: 'Smart Home Automation',
    tag: 'Residential',
    image: 'assets/images/gallery/smart-home-wirings.jpg',
    summary: 'Turn any home into a connected, intelligent space — lighting, climate, entertainment and access, all controllable from one app or voice command.',
    features: ['Smart lighting & switch automation', 'Voice & app-based control', 'Intercom & video door entry', 'Automated curtains, AC & scenes']
  },
  {
    icon: 'camera',
    title: 'CCTV & Security Systems',
    tag: 'Residential & Commercial',
    image: 'assets/images/gallery/smart-home-wiring.jpg',
    summary: 'Round-the-clock protection with HD camera networks, remote monitoring and access control tailored to your property.',
    features: ['HD & night-vision CCTV networks', 'Remote monitoring on mobile', 'Access control & alarm systems', 'DSTV & satellite installation']
  },
  {
    icon: 'bolt',
    title: 'Electrical Wiring & Installations',
    tag: 'All Property Types',
    image: 'assets/images/gallery/panel-installation.jpg',
    summary: 'Certified wiring, panel upgrades and lighting design built to code — from single rooms to full-building rewires.',
    features: ['Full & partial rewiring', 'Distribution board upgrades', 'Lighting design & installation', 'Fault-finding & repairs']
  },
  {
    icon: 'flame',
    title: 'Fire Alarm & Safety Systems',
    tag: 'Commercial & Industrial',
    image: 'assets/images/gallery/industrial-cabling.jpg',
    summary: 'Detection and suppression systems designed for compliance, fast response, and the safety of everyone on site.',
    features: ['Fire & smoke detection', 'Suppression system install', 'Emergency alarm networks', 'Compliance inspections']
  },
  {
    icon: 'battery',
    title: 'Generator & Backup Power',
    tag: 'All Property Types',
    image: 'assets/images/gallery/generator-setup.jpg',
    summary: "Never lose power — generator installation, automatic transfer switches and backup wiring for uninterrupted supply.",
    features: ['Generator supply & installation', 'Automatic transfer switches', 'Emergency backup wiring', 'Routine servicing & repairs']
  },
  {
    icon: 'sun',
    title: 'Solar Panel Installation',
    tag: 'Residential & Commercial',
    image: 'assets/images/gallery/solar-array.jpg',
    summary: 'Cut your power bills with rooftop or ground-mount solar arrays, sized and installed for reliable year-round output.',
    features: ['Rooftop & ground-mount arrays', 'Battery storage & hybrid setups', 'Solar + generator integration', 'System maintenance']
  },
  {
    icon: 'building',
    title: 'Industrial & Commercial Engineering',
    tag: 'Industrial',
    image: 'assets/images/gallery/control-room.jpg',
    summary: 'Heavy-duty electrical engineering for factories and facilities — control panels, motor installs and structured cabling.',
    features: ['Control panels & switchgear', 'Motor & SCADA automation', 'Structured cabling', 'Earthing & bonding']
  }
];
