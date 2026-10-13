import type { Content } from "./types";
export const en: Content = {
  title: "LAN-ICT | Offsite Data Backup",
  description:
    "Encrypted offsite backup for all your data. Compare Basic, Standard and Premium storage, retention and recovery options.",
  skip: "Skip to content",
  navLabel: "Main navigation",
  menu: "Menu",
  close: "Close menu",
  nav: ["About the service", "Technical specifications", "Pricing", "FAQ"],
  quote: "Request a quote",
  hero: {
    displayTitle: "DATA BACKUP",
    how: "See how it works",
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
    text: "Automatic, encrypted backup of your data at a remote location. We look after your backups, equipment and maintenance so you can focus on your business.",
    pricing: "View packages & pricing",
  },
  about: {
    eyebrow: "BUILT AROUND YOUR WORK",
    title: "A second copy. A stronger recovery plan.",
    text: "We do not sell disks – we provide a professionally managed backup service designed to keep your data safe and available when you need it most. Data is automatically transferred to our server at a remote location, independent of your equipment and the premises where the original data is held, encrypted and protected against unauthorized access. The system is designed to reduce the risk of data loss due to equipment failure, fire, theft or viruses, with guaranteed retention for the agreed period.\n\nYou do not need to worry about equipment, maintenance or the daily operation of the system – we look after your backups so you can focus on your business.",
    steps: [
      {
        title: "Configure",
        text: "We tailor the backup system to your needs – data volume, internet connection speed and desired retention period.",
      },
      {
        title: "Encrypt & transfer",
        text: "Data is automatically encrypted on your computer before upload, and only new and changed data is then transferred over the internet. Transfers pass through an additional protected VPN tunnel, providing multiple layers of security for your data in transit.",
      },
      {
        title: "Retain & recover",
        text: "Keep available backups within your package limits and recover data when needed, using your encryption key.",
      },
    ],
  },
  benefits: {
    eyebrow: "LESS EXPOSURE. MORE CONTROL.",
    title: "Make remote backup part of your everyday routine.",
    text: "A practical layer of protection for the data your business depends on.",
    cards: [
      {
        title: "Retention that fits your needs",
        text: "We agree on a data retention period with you, according to your business needs and applicable legal obligations.",
      },
      {
        title: "Privacy starts at your premises",
        text: "Data is encrypted on the client before upload. Recovery requires your encryption key; key custody and the operational recovery model must be agreed before service starts.",
      },
      {
        title: "Transfers on your schedule",
        text: "Incremental backups transfer only new and changed data since the previous backup, reducing the amount of data transferred and the time needed for backup. We tailor the transfer schedule and bandwidth limit to your needs to minimize the impact on your company’s regular operations.",
      },
      {
        title: "Extra security when you need it most",
        text: "Remote backups stored on our servers enable data recovery in the event of disk or DVR failure, equipment damage or theft. Successful recovery depends on the integrity of the stored copies, the availability of the required data and the decryption key.\n\nFor extra security, we recommend keeping another independent copy of your data on your own storage medium, alongside our remote copy. This reduces the risk of data loss and further improves the reliability of your protection system.",
      },
    ],
  },
  technical: {
    eyebrow: "THE PATH FROM DATA TO BACKUP",
    title: "Encrypted locally. Stored remotely.",
    text: "A clearly defined architecture with multiple layers of protection for every data transfer.",
    diagram: [
      "Client data for backup",
      "Encryption on the client’s computer",
      "WireGuard tunnel",
      "Remote encrypted storage",
    ],
    description:
      "Client data is encrypted on the client’s computer, passes through a WireGuard VPN tunnel, and reaches remote encrypted storage.",
    items: [
      {
        title: "Multiple layers of protection for your backups",
        text: "Data is encrypted before transfer, and backups are protected by access control and data integrity mechanisms.\n\nClient access is restricted so that clients can upload new backups but cannot delete or modify copies already stored on our server. This reduces the risk of a virus or ransomware compromising a client’s computer or device and affecting previously stored backups.\n\nEven if the original data is damaged or encrypted by ransomware, previously stored backups may remain available for recovery.",
      },
      {
        title: "Dedicated WireGuard transfer",
        text: "A VPN tunnel connects the customer location and remote server for encrypted transfers.",
      },
      {
        title: "Automatic retention",
        text: "Available backups rotate according to the agreed policy, and expired data is removed to reclaim storage. Retention cannot recover missed backups.",
      },
      {
        title: "Premium self-service access",
        text: "The Premium package lets you browse and download data yourself through a graphical interface.",
      },
    ],
  },
  pricing: {
    eyebrow: "TRANSPARENT PACKAGE LIMITS",
    title: "Choose the space and retention you need.",
    text: "Three packages. Clear limits. We can help match them to your data volume.",
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
    text: "Tell us about your data volume and retention needs to find the right package.",
    details: ["Address", "Support phone", "Email", "Working hours"],
    pending: "To be confirmed before launch",
    notice:
      "Online inquiries are not available yet. Please contact us by email or phone. Contact details will be added before launch.",
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
