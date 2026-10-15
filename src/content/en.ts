import type { Content } from "./types";
export const en: Content = {
  title: "LAN-ICT | Offsite Data Backup",
  description:
    "Encrypted offsite backup for business data. Compare packages, retention periods and recovery options.",
  skip: "Skip to content",
  navLabel: "Main navigation",
  menu: "Menu",
  close: "Close menu",
  nav: ["About the service", "Technical specifications", "Pricing", "FAQ"],
  quote: "Request a quote",
  hero: {
    displayTitle: "DATA BACKUP",
    how: "See how it works",
    mobileHow: "How it works",
    mobilePricing: "Packages & pricing",
    features: [
      { title: "Data", text: "security" },
      { title: "Offsite", text: "backup" },
      { title: "Data", text: "recovery" },
      { title: "Automatic", text: "retention" },
      { title: "Encryption", text: "before upload" },
    ],
    cards: [
      "Solutions for storing your data",
      "Backup at a remote location",
      "Plan your backup with us",
    ],
    eyebrow: "SECURITY FOR YOUR DATA",
    title: "Secure offsite backup for all your data.",
    text: "Automatic, encrypted storage of an additional copy of your business data at a remote location.",
    pricing: "View packages & pricing",
  },
  about: {
    eyebrow: "BUILT AROUND YOUR WORK",
    title: "A second copy. A stronger recovery plan.",
    text: "A remote copy helps you recover data when your equipment or primary location is unavailable. We manage the backup system and maintain the equipment, tailoring the service to your data and retention needs.",
    steps: [
      {
        title: "Configure",
        text: "We define the data to back up, transfer schedule and retention period.",
      },
      {
        title: "Encrypt & transfer",
        text: "After the initial backup, only new and changed data is transferred automatically.",
      },
      {
        title: "Retain & recover",
        text: "We retain copies according to your package and help you recover data.",
      },
    ],
  },
  benefits: {
    eyebrow: "LESS EXPOSURE. MORE CONTROL.",
    title: "An extra layer of data protection.",
    text: "A practical layer of protection for the data your business depends on.",
    cards: [
      {
        title: "Retention that fits your needs",
        text: "We agree on retention according to your business needs and package terms.",
      },
      {
        title: "Privacy starts at your premises",
        text: "Data is encrypted before upload. We agree on key custody and recovery procedures before the service starts.",
      },
      {
        title: "Transfers on your schedule",
        text: "We adjust transfer schedules and bandwidth to fit your work. Only new and changed data is transferred.",
      },
      {
        title: "A copy beyond your premises",
        text: "A remote copy helps with equipment failure, damage or theft. Recovery depends on a valid backup and an available decryption key. Keep an independent local copy as part of your recovery plan.",
      },
    ],
  },
  technical: {
    eyebrow: "THE PATH FROM DATA TO BACKUP",
    title: "Encrypted locally. Stored remotely.",
    text: "From local encryption to a remote copy.",
    diagram: [
      "Client data for backup",
      "Encryption on the client’s computer",
      "VPN tunnel",
      "Remote encrypted storage",
    ],
    description:
      "Data is encrypted on the client’s computer and transferred through a VPN to remote storage.",
    items: [
      {
        title: "Protecting stored backups",
        text: "Clients can upload new copies but cannot delete or modify stored backups. Restricted access reduces the risk of ransomware on a client device affecting earlier copies.",
      },
      {
        title: "Transfer through a VPN tunnel",
        text: "A VPN connects your premises to the remote server, adding protection during transfer.",
      },
      {
        title: "Automatic retention",
        text: "Copies follow the agreed retention policy. Expired data is deleted to free up storage.",
      },
      {
        title: "Premium self-service access",
        text: "Premium lets you browse and download data through a graphical interface.",
      },
    ],
  },
  pricing: {
    eyebrow: "TRANSPARENT PACKAGE LIMITS",
    title: "Choose the space and retention you need.",
    text: "We help you choose a package for your data volume and retention needs.",
    recommended: "Recommended",
    month: "/ month",
    upTo: "Up to",
    storage: "Storage",
    from: "From",
    retention: "Retention period",
    retentions: [
      "agreed number of days",
      "365 days",
      "365 + agreed number of days",
    ],
    gui: "Self-service GUI",
    included: "Yes",
    cli: "No",
    disk: "Physical disk disaster recovery",
    incident: "/ incident",
    annual: "Once per year included; €{price} thereafter",
    setup: "One-time setup",
    choose: "Choose",
    descriptions: [
      "For a shorter retention window.",
      "For a full year of retained backups.",
      "For higher volumes and self-service access.",
    ],
  },
  faq: {
    eyebrow: "GOOD TO KNOW",
    title: "A few questions before you start.",
    items: [
      {
        question: "What happens if I lose my encryption password?",
        answer:
          "Recovery requires the encryption key or password. Under the proposed customer-controlled key model, the provider cannot decrypt data without it. Actual key custody and recovery practices, including Premium browser access, must be confirmed before launch.",
      },
      {
        question:
          "What if we need data or a version of it from eight months ago?",
        answer:
          "The number of days for which data is retained is agreed according to your needs and any legal obligations. The retention period applies to data successfully transferred and stored in the backup system.\n\nIf a backup has not completed successfully for any reason, we cannot guarantee data availability for that period. Regularly checking backup success is therefore essential to identify and resolve any problems in time.",
      },
      {
        question: "Will backup transfers slow down my connection during work?",
        answer:
          "Transfers can be scheduled outside working periods and bandwidth-limited to reduce disruption. Incremental backups reduce repeated transfers, but still use connection bandwidth and local hardware resources.",
      },
    ],
  },
  contact: {
    eyebrow: "LET’S PLAN YOUR BACKUP",
    title: "Start with your needs.",
    text: "Tell us your data volume and retention needs. We will suggest a suitable package.",
    details: ["Address", "Support phone", "Email", "Working hours"],
    pending: "To be confirmed before launch",
    notice:
      "Online inquiries are not available yet. Contact details will be added before launch.",
    required: "Fields marked * are required when inquiries become available.",
    name: "Full name",
    company: "Company",
    email: "Email address",
    phone: "Phone number",
    package: "Package",
    consultation: "Consultation required",
    message: "Message / additional questions",
    send: "Send inquiry",
  },
  footer: {
    description: "Encrypted data backups. Beyond your premises.",
    pending: "Legal business identity to be confirmed.",
    top: "Back to top",
    languages: "Language",
    copyright: "All rights reserved.",
  },
};
