export interface Content {
  title: string; description: string; skip: string; navLabel: string; menu: string; close: string;
  nav: [string, string, string, string]; quote: string;
  design: { toggle: string; showBlue: string; showClassic: string };
  hero: { classicText: string; classicEyebrow: string; displayTitle: string; how: string; features: {title: string; text: string}[]; cards: string[]; eyebrow: string; title: string; text: string; pricing: string; consult: string; highlights: string[]; diagramLabel: string; remote: string; client: string; encrypted: string; schedule: string };
  about: { eyebrow: string; title: string; text: string; steps: {title: string; text: string}[] };
  benefits: { eyebrow: string; title: string; text: string; cards: {title: string; text: string}[] };
  technical: { eyebrow: string; title: string; text: string; diagram: string[]; description: string; items: {title: string; text: string}[] };
  pricing: { eyebrow: string; title: string; text: string; recommended: string; month: string; upTo: string; storage: string; daily: string; retention: string; days: string; rotation: string; rotations: string[]; gui: string; included: string; cli: string; disk: string; incident: string; annual: string; setup: string; choose: string; notes: string[]; descriptions: string[] };
  faq: { eyebrow: string; title: string; items: {question: string; answer: string}[] };
  contact: { eyebrow: string; title: string; text: string; details: string[]; pending: string; notice: string; required: string; name: string; company: string; email: string; phone: string; package: string; consultation: string; message: string; send: string };
  footer: { description: string; pending: string; top: string; languages: string; copyright: string };
}
