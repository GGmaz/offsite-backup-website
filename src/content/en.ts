import type { Content } from './types';
export const en: Content = {
  title: 'Offsite Backup | Secure video backup for technical inspections',
  description: 'Encrypted offsite backup for technical inspection recordings. Compare Basic, Standard and Premium storage, retention and recovery options.',
  skip: 'Skip to content', navLabel: 'Main navigation', menu: 'Menu', close: 'Close menu',
  nav: ['About the service', 'Technical specifications', 'Pricing', 'FAQ'], quote: 'Request a quote',
  hero: {
    eyebrow: 'VIDEO BACKUP FOR TECHNICAL INSPECTION CENTERS',
    title: 'Secure offsite backup of video recordings for technical inspections.',
    text: 'Keep an encrypted copy beyond your premises. Scheduled incremental transfers and clear retention options help you plan for the recordings you may need tomorrow.',
    pricing: 'View packages & pricing', consult: 'Schedule a consultation',
    highlights: ['Client-side encryption with Restic', '365 days with Standard; extended Premium retention subject to agreed terms', 'Encrypted transfer through WireGuard VPN'],
    diagramLabel: 'Your recordings, protected beyond your premises', remote: 'Remote storage', client: 'Inspection center', encrypted: 'Encrypted before upload', schedule: 'Scheduled · Incremental · Offsite',
  },
  about: {
    eyebrow: 'BUILT AROUND YOUR WORK', title: 'A second copy. A stronger recovery plan.',
    text: 'For technical inspection centers that need to keep video recordings beyond a single DVR or local disk. We configure a remote backup process around your recording volume, connection and chosen retention period.',
    steps: [
      { title: 'Configure', text: 'Agree on the package, backup schedule and retention policy for your location.' },
      { title: 'Encrypt & transfer', text: 'Restic encrypts recordings locally, then transfers incremental backups through a WireGuard tunnel.' },
      { title: 'Retain & recover', text: 'Keep available backups within your package limits and recover recordings when needed, using your encryption key.' },
    ],
  },
  benefits: {
    eyebrow: 'LESS EXPOSURE. MORE CONTROL.', title: 'Make remote backup part of your everyday routine.',
    text: 'A practical layer of protection for the recordings your business depends on.',
    cards: [
      { title: 'Retention that fits your needs', text: 'Automated retention follows your chosen package: 180 days with Basic, 365 days with Standard, or extended retention with Premium under approved terms. Applicable legal requirements must be confirmed.' },
      { title: 'Privacy starts at your premises', text: 'Recordings are encrypted on the client before upload. Recovery requires your encryption key; key custody and the operational recovery model must be agreed before service starts.' },
      { title: 'Transfers on your schedule', text: 'Incremental backups transfer changes. Scheduling and bandwidth limits help reduce disruption during inspections; backups still use network and hardware resources.' },
      { title: 'Recovery beyond the local disk', text: 'Remote copies help protect against DVR or disk failure, damaged equipment and theft. Recovery depends on successful backups, retained data and an available encryption key.' },
    ],
  },
  technical: {
    eyebrow: 'THE PATH FROM RECORDING TO BACKUP', title: 'Encrypted locally. Stored remotely.',
    text: 'A straightforward architecture, with protection built into each transfer.',
    diagram: ['Inspection center', 'Client-side encryption', 'WireGuard tunnel', 'Remote encrypted storage'],
    description: 'Recordings move from the inspection center to client-side encryption, through a WireGuard VPN tunnel, and into remote encrypted storage.',
    items: [
      { title: 'Restic encryption', text: 'AES-256 encryption with Poly1305-AES authentication protects the backup repository.' },
      { title: 'Dedicated WireGuard transfer', text: 'A VPN tunnel connects the customer location and remote server for encrypted transfers.' },
      { title: 'Plan for your recording volume', text: 'Indicative volume is approximately 10 GB per inspection line per day. Actual usage depends on recording settings and must fit the selected package limits.' },
      { title: 'Automatic retention', text: 'Available backups rotate according to the agreed policy, and expired data is removed to reclaim storage. Retention cannot recover missed backups.' },
      { title: 'Premium self-service access', text: 'Premium includes browsing and downloading recordings through a graphical interface. The browser product and key custody model are pending confirmation.' },
    ],
  },
  pricing: {
    eyebrow: 'TRANSPARENT PACKAGE LIMITS', title: 'Choose the space and retention you need.',
    text: 'Three packages. Clear limits. We can help match them to your inspection volume.',
    recommended: 'Recommended', month: '/ month', upTo: 'Up to', storage: 'Storage', daily: 'Daily growth', retention: 'Retention', days: 'days', rotation: 'Rotation',
    rotations: ['Rolling FIFO', 'Automatic daily rolling retention', 'Rolling + archive'], gui: 'Self-service GUI', included: 'Included', cli: 'No; CLI only', disk: 'Physical disk disaster recovery', incident: '/ incident', annual: 'Once per year included; €{price} thereafter', setup: 'One-time setup', choose: 'Choose',
    descriptions: ['For a shorter retention window.', 'For a full year of retained backups.', 'For higher volumes and self-service access.'],
    notes: ['Basic provides 180 days (6 months), not 365-day retention. Standard provides 365 days (1 year). Retention applies to successfully backed-up and retained recordings, once the archive has accumulated.', 'Premium’s extended archive duration, package scope, taxes, overages and commercial terms require confirmation. Standard storage is rolling. At 25 GB/day, a year approaches 9.13 TB before overhead, leaving limited room for extended archiving within 10 TB.'],
  },
  faq: {
    eyebrow: 'GOOD TO KNOW', title: 'A few questions before you start.', items: [
      { question: 'What happens if I lose my encryption password?', answer: 'Recovery requires the encryption key or password. Under the proposed customer-controlled key model, the provider cannot decrypt recordings without it. Actual key custody and recovery practices, including Premium browser access, must be confirmed before launch.' },
      { question: 'What if an inspector requests a recording from eight months ago?', answer: 'Standard and Premium target a retention period covering eight months once the archive has accumulated, provided that recording was successfully backed up and retained. Basic’s 180-day window does not cover eight months. A retention policy does not guarantee that recordings exist for days when backups failed.' },
      { question: 'Will backup transfers slow down my connection during inspections?', answer: 'Transfers can be scheduled outside working periods and bandwidth-limited to reduce disruption. Incremental backups reduce repeated transfers, but still use connection bandwidth and local hardware resources.' },
    ],
  },
  contact: {
    eyebrow: 'LET’S PLAN YOUR BACKUP', title: 'Start with your inspection center.',
    text: 'Tell us about your recording volume and retention needs to find the right package.',
    details: ['Address', 'Support phone', 'Email', 'Working hours'], pending: 'To be confirmed before launch',
    notice: 'Online inquiries are not available yet. Please contact us by email or phone. Contact details will be added before launch.',
    required: 'Fields marked * are required when inquiries become available.', name: 'Full name', company: 'Company / technical inspection center', email: 'Email address', phone: 'Phone number', package: 'Package', consultation: 'Consultation required', message: 'Message / additional questions', send: 'Send inquiry',
  },
  footer: { description: 'Encrypted video backups. Beyond your premises.', pending: 'Legal business identity to be confirmed.', top: 'Back to top', languages: 'Language', copyright: 'All rights reserved.' },
};
