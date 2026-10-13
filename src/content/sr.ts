import type { Content } from "./types";
export const sr: Content = {
  title: "LAN-ICT | Offsite Data Backup",
  description:
    "Šifrovani backup svih vaših podataka na udaljenoj lokaciji. Uporedite Basic, Standard i Premium pakete, prostor, čuvanje i oporavak.",
  skip: "Pređi na sadržaj",
  navLabel: "Glavna navigacija",
  menu: "Meni",
  close: "Zatvori meni",
  nav: ["O usluzi", "Tehničke specifikacije", "Paketi i cene", "Česta pitanja"],
  quote: "Zatražite ponudu",
  hero: {
    displayTitle: "DATA BACKUP",
    how: "Pogledajte kako funkcioniše",
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
    text: "Mi ne prodajemo diskove – pružamo Backup uslugu kojom profesionalno upravljamo, sa ciljem da Vaši podaci budu bezbedno sačuvani i dostupni onda kada su Vam najpotrebniji. Podaci se automatski prenose na naš server na udaljenoj lokaciji, nezavisno od Vaše opreme i prostora u kojima se izvorno nalaze, enkriptovani i zaštićeni od neovlašćenog pristupa. Sistem je osmišljen da smanji rizik od gubitka podataka usled kvara opreme, požara, krađe ili napada virusa, uz garantovano čuvanje podataka u skladu sa ugovorenim periodom.\n\nNe morate da brinete o opremi, održavanju i svakodnevnom radu sistema – mi brinemo o Vašim rezervnim kopijama, a Vi možete da se posvetite svom poslu.",
    steps: [
      {
        title: "Podešavanje",
        text: "Backup sistem prilagođavamo Vašim potrebama – količini podataka, brzini internet veze i željenom periodu čuvanja.",
      },
      {
        title: "Šifrovanje i prenos",
        text: "Podaci se automatski šifruju na Vašem računaru pre slanja, a zatim putem Interneta prenose samo novi i izmenjeni podaci. Prenos se odvija kroz dodatno zaštićen VPN tunel, čime se obezbeđuje višeslojna zaštita Vaših podataka tokom prenosa.",
      },
      {
        title: "Čuvanje i oporavak",
        text: "Dostupne kopije čuvaju se u okviru limita paketa. Kada zatrebaju, podaci se vraćaju uz vaš ključ za šifrovanje.",
      },
    ],
  },
  benefits: {
    eyebrow: "MANJI RIZIK. VIŠE KONTROLE.",
    title: "Udaljeni backup kao deo svakodnevnog rada.",
    text: "Praktičan sloj zaštite za podatke od kojih zavisi vaše poslovanje.",
    cards: [
      {
        title: "Čuvanje prema vašim potrebama",
        text: "Period čuvanja podataka definišemo u dogovoru sa Vama, u skladu sa Vašim poslovnim potrebama i važećim zakonskim obavezama.",
      },
      {
        title: "Privatnost počinje kod vas",
        text: "Podaci se šifruju na klijentu pre slanja. Za oporavak je potreban vaš ključ za šifrovanje; način čuvanja ključa i postupak oporavka dogovaraju se pre početka usluge.",
      },
      {
        title: "Prenos po vašem rasporedu",
        text: "Inkrementalni backup prenosi samo nove i izmenjene podatke u odnosu na prethodnu kopiju, čime se smanjuje količina prenetih podataka i vreme potrebno za backup. Raspored prenosa i ograničenje brzine prilagođavamo Vašim potrebama kako bi se uticaj na redovan rad Vaše kompanije sveo na minimum.",
      },
      {
        title: "Dodatna sigurnost kada je najpotrebnije",
        text: "Udaljene rezervne kopije, koje čuvamo na našim serverima, omogućavaju oporavak podataka u slučaju kvara diska ili DVR uređaja, oštećenja opreme ili krađe. Mogućnost uspešnog oporavka zavisi od ispravnosti sačuvanih kopija, dostupnosti potrebnih podataka i ključa za dešifrovanje.\n\nRadi dodatne sigurnosti, preporučujemo da, pored naše udaljene kopije, čuvate još jednu nezavisnu kopiju podataka na sopstvenom mediju. Na taj način smanjujete rizik od gubitka podataka i dodatno povećavate pouzdanost svog sistema zaštite.",
      },
    ],
  },
  technical: {
    eyebrow: "OD PODATAKA DO REZERVNE KOPIJE",
    title: "Šifrovano lokalno. Sačuvano udaljeno.",
    text: "Jasno definisana arhitektura i višeslojna zaštita u svakom prenosu podataka.",
    diagram: [
      "Podaci klijenta za backup",
      "Šifrovanje na računaru klijenta",
      "VPN tunel",
      "Udaljeno šifrovano skladište",
    ],
    description:
      "Podaci klijenta šifruju se na računaru klijenta, prolaze kroz VPN tunel i stižu u udaljeno šifrovano skladište.",
    items: [
      {
        title: "Višeslojna zaštita Vaših rezervnih kopija",
        text: "Podaci se šifruju pre prenosa, a rezervne kopije su zaštićene mehanizmima za kontrolu pristupa i integriteta podataka.\n\nKorisnički pristup je ograničen tako da klijent može da šalje nove rezervne kopije, ali ne može da briše ili menja već sačuvane kopije na našem serveru. Time se smanjuje rizik da virus ili ransomware, koji kompromituje računar ili uređaj kod klijenta, ugrozi i ranije sačuvane rezervne kopije.\n\nČak i ako su izvorni podaci oštećeni ili šifrovani ransomware napadom, ranije sačuvane rezervne kopije mogu ostati dostupne za oporavak.",
      },
      {
        title: "Prenos kroz VPN tunel",
        text: "VPN tunel povezuje lokaciju korisnika sa udaljenim serverom za šifrovani prenos.",
      },
      {
        title: "Automatsko čuvanje",
        text: "Dostupne kopije rotiraju se prema dogovorenoj politici, a podaci kojima je istekao period čuvanja brišu se radi oslobađanja prostora. Politika čuvanja ne može nadoknaditi propušten backup.",
      },
      {
        title: "Samostalni pristup uz Premium",
        text: "Premium paket Vam daje mogućnost da sami pregledate i preuzimate podatke kroz grafički interfejs.",
      },
    ],
  },
  pricing: {
    eyebrow: "JASNI LIMITI PAKETA",
    title: "Izaberite prostor i period čuvanja.",
    text: "Tri paketa. Jasni limiti. Pomažemo vam da ih uskladite sa količinom podataka.",
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
    text: "Opišite količinu podataka i potreban period čuvanja da biste izabrali odgovarajući paket.",
    details: ["Adresa", "Telefon podrške", "Email", "Radno vreme"],
    pending: "Biće potvrđeno pre pokretanja",
    notice:
      "Online upiti još nisu dostupni. Kontaktirajte nas putem emaila ili telefona. Kontakt podaci biće dodati pre pokretanja.",
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
