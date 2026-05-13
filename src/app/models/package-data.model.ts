export interface PackageCategory {
  key: string;
  label: string;
  items: string[];
}

export const PACKAGE_DATA: PackageCategory[] = [
  {
    key: 'residential',
    label: 'Residential',
    items: [
      'Smart Home Setup', 'DSTV Installation', 'CCTV Systems',
      'Fire Alarm', 'Intercom & Data', 'Electrical Wiring',
      'Automation', 'Repairs & Maintenance', 'Fittings & Tiling'
    ]
  },
  {
    key: 'commercial',
    label: 'Commercial',
    items: [
      'Full Electrical Install', 'CCTV Network', 'Fire Detection',
      'Structured Cabling', 'Intercom System', 'Generator Wiring',
      'Automation Control', 'Lighting Design', 'Emergency Backup'
    ]
  },
  {
    key: 'industrial',
    label: 'Industrial',
    items: [
      'Industrial Wiring', 'Control Panels', 'Motor Installations',
      'Cable Trays', 'Earthing & Bonding', 'Fire Suppression',
      'SCADA Automation', 'Transformer Works', 'Switchgear Install'
    ]
  }
];
