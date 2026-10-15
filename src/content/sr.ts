import type { Content } from "./types";
export const sr: Content = {
  title: "LAN-ICT | Offsite Data Backup",
  description:
    "Šifrovani backup poslovnih podataka na udaljenoj lokaciji. Uporedite pakete, period čuvanja i mogućnosti oporavka.",
  skip: "Pređi na sadržaj",
  navLabel: "Glavna navigacija",
  menu: "Meni",
  close: "Zatvori meni",
  nav: ["O usluzi", "Tehničke specifikacije", "Paketi i cene", "Česta pitanja"],
  quote: "Zatražite ponudu",
  hero: {
    displayTitle: "DATA BACKUP",
    how: "Pogledajte kako funkcioniše",
    mobileHow: "Kako funkcioniše",
    mobilePricing: "Paketi i cene",
    features: [
      { title: "Sigurnost", text: "podataka" },
      { title: "Offsite", text: "backup" },
      { title: "Oporavak", text: "podataka" },
      { title: "Automatsko", text: "čuvanje" },
      { title: "Šifrovanje", text: "pre slanja" },
    ],
    cards: [
      "Rešenja za čuvanje vaših podataka",
      "Backup na udaljenoj lokaciji",
      "Planiranje vašeg backupa",
    ],
    eyebrow: "BEZBEDNOST VAŠIH PODATAKA",
    title: "Siguran backup svih vaših podataka na udaljenoj lokaciji.",
    text: "Automatski, šifrovani backup vaših podataka na udaljenoj lokaciji. Mi brinemo o rezervnim kopijama, opremi i održavanju — vi se posvetite svom poslu.",
    pricing: "Pogledajte pakete i cene",
  },
  about: {
    eyebrow: "PRILAGOĐENO VAŠEM POSLOVANJU",
    title: "Druga kopija. Pouzdaniji plan oporavka.",
    text: "Udaljena kopija pomaže u oporavku podataka kada vaša oprema ili primarna lokacija nisu dostupne. Mi upravljamo backup sistemom i održavamo opremu. Uslugu prilagođavamo vašim podacima i potrebnom periodu čuvanja. Sistem je osmišljen da smanji rizik od gubitka podataka usled kvara opreme, požara, krađe ili napada virusa, uz garantovano čuvanje podataka u skladu sa ugovorenim periodom.",
    steps: [
      {
        title: "Podešavanje",
        text: "Određujemo podatke za backup, raspored prenosa i period čuvanja.",
      },
      {
        title: "Šifrovanje i prenos",
        text: "Podaci se automatski šifruju na Vašem računaru pre slanja, a zatim putem Interneta prenose samo novi i izmenjeni podaci.",
      },
      {
        title: "Čuvanje i oporavak",
        text: "Kopije čuvamo prema izabranom paketu i pomažemo pri oporavku podataka.",
      },
    ],
  },
  benefits: {
    eyebrow: "MANJI RIZIK. VIŠE KONTROLE.",
    title: "Dodatni sloj zaštite podataka.",
    text: "Praktičan sloj zaštite za podatke od kojih zavisi vaše poslovanje.",
    cards: [
      {
        title: "Čuvanje prema vašim potrebama",
        text: "Period čuvanja biramo prema vašim poslovnim potrebama i uslovima paketa.",
      },
      {
        title: "Privatnost počinje kod vas",
        text: "Podaci se šifruju pre slanja. Način čuvanja ključa i postupak oporavka dogovaramo pre početka usluge.",
      },
      {
        title: "Prenos po vašem rasporedu",
        text: "Raspored i brzinu prenosa prilagođavamo vašem radu. Prenose se samo novi i izmenjeni podaci.",
      },
      {
        title: "Kopija van vaše lokacije",
        text: "Udaljena kopija pomaže pri kvaru, oštećenju opreme ili krađi. Oporavak zavisi od ispravnosti kopije i dostupnosti ključa. Zadržite i nezavisnu lokalnu kopiju kao deo plana oporavka.",
      },
    ],
  },
  technical: {
    eyebrow: "OD PODATAKA DO REZERVNE KOPIJE",
    title: "Šifrovano lokalno. Sačuvano udaljeno.",
    text: "Od lokalnog šifrovanja do udaljene kopije.",
    diagram: [
      "Podaci klijenta za backup",
      "Šifrovanje na računaru klijenta",
      "VPN tunel",
      "Udaljeno šifrovano skladište",
    ],
    description:
      "Podaci se šifruju kod klijenta i prenose kroz VPN do udaljenog skladišta.",
    items: [
      {
        title: "Zaštita sačuvanih kopija",
        text: "Klijent može da šalje nove kopije, ali ne i da briše ili menja sačuvane. Ograničen pristup smanjuje rizik da ransomware na klijentskom uređaju ugrozi ranije kopije.",
      },
      {
        title: "Prenos kroz VPN tunel",
        text: "VPN povezuje vašu lokaciju sa udaljenim serverom i dodatno štiti prenos.",
      },
      {
        title: "Automatsko čuvanje",
        text: "Kopije se čuvaju prema dogovorenoj politici. Po isteku perioda čuvanja, podaci se brišu radi oslobađanja prostora.",
      },
      {
        title: "Samostalni pristup uz Premium",
        text: "Premium omogućava pregled i preuzimanje podataka kroz grafički interfejs.",
      },
    ],
  },
  pricing: {
    eyebrow: "JASNI LIMITI PAKETA",
    title: "Izaberite prostor i period čuvanja.",
    text: "Pomažemo vam da izaberete paket prema količini podataka i periodu čuvanja.",
    recommended: "Preporučeno",
    month: "/ mesečno",
    upTo: "Do",
    storage: "Prostor",
    from: "Od",
    retention: "Period čuvanja",
    retentions: [
      "dogovoren broj dana",
      "365 dana",
      "365 + dogovoren broj dana",
    ],
    gui: "Samostalni grafički pristup",
    included: "Da",
    cli: "Ne",
    disk: "Oporavak putem fizičkog diska",
    incident: "/ slučaj",
    annual: "Jednom godišnje uključeno; zatim €{price}",
    setup: "Jednokratno podešavanje",
    choose: "Izaberite",
    descriptions: [
      "Za kraći period čuvanja.",
      "Za godinu dana sačuvanih kopija.",
      "Za veći obim i samostalni pristup.",
    ],
  },
  faq: {
    eyebrow: "KORISNO JE ZNATI",
    title: "Nekoliko pitanja pre početka.",
    items: [
      {
        question: "Šta ako izgubim lozinku za šifrovanje?",
        answer:
          "Za oporavak je potreban ključ ili lozinka za šifrovanje. Prema predloženom modelu u kome korisnik kontroliše ključ, pružalac usluge bez njega ne može dešifrovati podatke. Stvarni način čuvanja ključa i oporavka, uključujući Premium pristup, mora se potvrditi pre pokretanja.",
      },
      {
        question:
          "Šta ako nam zatreba podatak ili njegova verzija od pre osam meseci?",
        answer:
          "Broj dana čuvanja podataka utvrđuje se dogovorom, u skladu sa Vašim potrebama i eventualnim zakonskim obavezama. Period čuvanja odnosi se na podatke koji su uspešno preneti i sačuvani u okviru backup sistema.\n\nUkoliko backup iz bilo kog razloga nije uspešno izvršen, ne možemo garantovati dostupnost podatka za taj period. Zato je važno da se redovno proverava uspešnost backup-a kako bi se na vreme uočili i otklonili eventualni problemi.",
      },
      {
        question: "Da li će backup usporiti internet tokom rada?",
        answer:
          "Prenos se može planirati van radnog vremena i ograničiti protokom kako bi se smanjilo ometanje. Inkrementalni backup smanjuje ponovljene prenose, ali i dalje koristi internet vezu i lokalne hardverske resurse.",
      },
    ],
  },
  contact: {
    eyebrow: "ISPLANIRAJMO VAŠ BACKUP",
    title: "Počnimo od vaših potreba.",
    text: "Navedite količinu podataka i period čuvanja. Predložićemo odgovarajući paket.",
    details: ["Adresa", "Telefon podrške", "Email", "Radno vreme"],
    pending: "Biće potvrđeno pre pokretanja",
    notice:
      "Slanje upita još nije dostupno. Kontakt podaci biće dodati pre pokretanja.",
    required:
      "Polja označena sa * biće obavezna kada slanje upita bude dostupno.",
    name: "Ime i prezime",
    company: "Kompanija",
    email: "Email adresa",
    phone: "Broj telefona",
    package: "Paket",
    consultation: "Potrebne su konsultacije",
    message: "Poruka / dodatna pitanja",
    send: "Pošaljite upit",
  },
  footer: {
    description: "Šifrovane kopije podataka. Van vaših prostorija.",
    pending: "Pravni naziv kompanije čeka potvrdu.",
    top: "Na vrh stranice",
    languages: "Jezik",
    copyright: "Sva prava zadržana.",
  },
};
