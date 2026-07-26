import en from "./en.json";
import ro from "./ro.json";
import type { Locale } from "@/config/site";
import type { PageKey } from "@/i18n/routes";

export const homeCopy = { en, ro } as const;

export interface ContentItem {
  readonly title: string;
  readonly body: string;
  readonly badge?: string;
}

export interface ContentSection {
  readonly eyebrow?: string;
  readonly title: string;
  readonly paragraphs?: readonly string[];
  readonly items?: readonly ContentItem[];
  readonly quote?: string;
  readonly tone?: "paper" | "cream" | "navy";
}

export interface PageContent {
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly intro: string;
  readonly note?: string;
  readonly sections: readonly ContentSection[];
  readonly cta?: {
    readonly title: string;
    readonly body: string;
    readonly label: string;
    readonly target: PageKey;
  };
}

type LocalizedPages = Record<
  Exclude<PageKey, "home" | "faq">,
  Record<Locale, PageContent>
>;

export const pages: LocalizedPages = {
  library: {
    en: {
      metaTitle: "MauAI Library — Ask your books and open the source",
      metaDescription:
        "See how MauAI is being designed to navigate personal documents and Noah Library with visible passages, pages, and evidence boundaries.",
      eyebrow: "The library is the product",
      title: "Ask your books. Open the source.",
      intro:
        "MauAI is being built around a simple boundary: your library carries the knowledge; AI helps you find, connect, and understand it.",
      note: "Product principle · Core flows are in active development",
      sections: [
        {
          title: "Your knowledge remains yours.",
          paragraphs: [
            "My Library is the place for your books, notes, manuals, and work documents. It is designed to stay separate from the knowledge pack distributed with MauAI.",
            "Models can be replaced. Your documents, metadata, and history remain the assets that matter.",
          ],
          items: [
            {
              title: "Books and documents",
              body: "The first version is designed for PDF, TXT, and Markdown, indexed locally with identity and provenance.",
            },
            {
              title: "Natural questions",
              body: "Ask in your own words. No model menus, commands, or retrieval jargon are required.",
            },
            {
              title: "Visible passages",
              body: "When an answer is library-backed, MauAI is designed to show the document, passage, and page.",
            },
          ],
        },
        {
          eyebrow: "Two libraries",
          title: "Personal knowledge and curated knowledge stay distinct.",
          items: [
            {
              title: "My Library",
              body: "Your own books, notes, and documents: private, user-controlled, and separate from the distributed pack.",
            },
            {
              title: "Noah Library",
              body: "A curated, versioned, read-only knowledge pack built only from material that can be distributed legally.",
              badge: "Being curated",
            },
          ],
          tone: "paper",
        },
        {
          eyebrow: "Evidence contract",
          title: "Three states. No quiet blur between them.",
          items: [
            {
              title: "This is what the library says",
              body: "A source-backed answer includes the passages and pages used. Traceability is the goal, not a claim of absolute truth.",
              badge: "Source-backed",
            },
            {
              title: "The librarian stops",
              body: "If the documents do not support an answer, the system is designed to say so and offer a deeper search.",
              badge: "Not enough evidence",
            },
            {
              title: "Free conversation stays separate",
              body: "Responses without library sources are labelled separately and are not presented as evidence from your documents.",
              badge: "No guarantee",
            },
          ],
        },
        {
          title: "When the shelves start talking to one another.",
          paragraphs: [
            "Biology meets chemistry. Physics meets mathematics. History meets economics. MauAI is being built to show what each source says, where a connection is explicit, and where inference begins.",
          ],
          quote: "Knowledge does not stay on the shelf. It joins the conversation.",
          tone: "navy",
        },
      ],
      cta: {
        title: "See the boundary before the promise.",
        body: "Read how local-first design, optional online features, and website privacy are kept distinct.",
        label: "Read the privacy principles",
        target: "privacy",
      },
    },
    ro: {
      metaTitle: "Biblioteca MauAI — Întreabă cărțile și deschide sursa",
      metaDescription:
        "Vezi cum este proiectată MauAI să navigheze documentele personale și Noah Library, cu pasaje, pagini și limite clare ale dovezilor.",
      eyebrow: "Biblioteca este produsul",
      title: "Întreabă cărțile. Deschide sursa.",
      intro:
        "MauAI este construită în jurul unei limite simple: biblioteca poartă cunoașterea; AI-ul te ajută s-o găsești, s-o legi și s-o înțelegi.",
      note: "Principiu de produs · Fluxurile de bază sunt în dezvoltare",
      sections: [
        {
          title: "Cunoașterea ta rămâne a ta.",
          paragraphs: [
            "Biblioteca mea este locul pentru cărțile, notițele, manualele și documentele tale. Este proiectată să rămână separată de pachetul de cunoaștere distribuit cu MauAI.",
            "Modelele pot fi înlocuite. Documentele, metadatele și istoricul tău rămân activele importante.",
          ],
          items: [
            {
              title: "Cărți și documente",
              body: "Prima versiune este proiectată pentru PDF, TXT și Markdown, indexate local cu identitate și proveniență.",
            },
            {
              title: "Întrebări naturale",
              body: "Întrebi în cuvintele tale. Nu ai nevoie de meniuri de modele, comenzi sau jargon tehnic.",
            },
            {
              title: "Pasaje vizibile",
              body: "Când un răspuns este bazat pe bibliotecă, MauAI este proiectată să arate documentul, pasajul și pagina.",
            },
          ],
        },
        {
          eyebrow: "Două biblioteci",
          title: "Cunoașterea personală și cea curatată rămân distincte.",
          items: [
            {
              title: "Biblioteca mea",
              body: "Cărțile, notițele și documentele tale: private, controlate de tine și separate de pachetul distribuit.",
            },
            {
              title: "Noah Library",
              body: "Un pachet curatat, versionat și read-only, construit numai din material care poate fi distribuit legal.",
              badge: "În curs de curatare",
            },
          ],
          tone: "paper",
        },
        {
          eyebrow: "Contractul dovezilor",
          title: "Trei stări. Nicio confuzie tăcută între ele.",
          items: [
            {
              title: "Asta spune biblioteca",
              body: "Un răspuns bazat pe surse include pasajele și paginile folosite. Ținta este trasabilitatea, nu adevărul absolut.",
              badge: "Bazat pe surse",
            },
            {
              title: "Bibliotecarul se oprește",
              body: "Dacă documentele nu susțin răspunsul, sistemul este proiectat să spună asta și să propună o căutare mai adâncă.",
              badge: "Dovezi insuficiente",
            },
            {
              title: "Conversația liberă rămâne separată",
              body: "Răspunsurile fără surse din bibliotecă sunt etichetate separat și nu sunt prezentate ca dovezi din documentele tale.",
              badge: "Fără garanție",
            },
          ],
        },
        {
          title: "Când rafturile încep să vorbească între ele.",
          paragraphs: [
            "Biologia întâlnește chimia. Fizica întâlnește matematica. Istoria întâlnește economia. MauAI este construită să arate ce spune fiecare sursă, unde legătura este explicită și unde începe inferența.",
          ],
          quote: "Cunoașterea nu stă pe raft. Intră în horă.",
          tone: "navy",
        },
      ],
      cta: {
        title: "Vezi limita înaintea promisiunii.",
        body: "Citește cum sunt păstrate separat designul local-first, funcțiile online opționale și confidențialitatea site-ului.",
        label: "Citește principiile de confidențialitate",
        target: "privacy",
      },
    },
  },
  privacy: {
    en: {
      metaTitle: "MauAI Privacy — Local-first by design",
      metaDescription:
        "Understand MauAI's local-first product principles, optional online boundaries, and the current public website's actual data behavior.",
      eyebrow: "Privacy without theatre",
      title: "Yours, on your computer.",
      intro:
        "Local-first is an architectural direction, not a decorative badge. The product core is designed to run on the user's device without a silent cloud fallback.",
      note: "Product principles are separate from this website's current behavior.",
      sections: [
        {
          title: "What local-first is designed to mean.",
          items: [
            {
              title: "Local by default",
              body: "In the planned local flow, conversations and personal-library data stay on the computer.",
            },
            {
              title: "Online only by choice",
              body: "Future online connectors are planned to be optional, visible, and separate from local answers.",
              badge: "Planned",
            },
            {
              title: "No silent fallback",
              body: "The architecture is designed not to send a local request to a cloud model without a clear user choice.",
            },
            {
              title: "Export with consent",
              body: "Problem reports are intended to begin locally and leave the device only after user review and consent.",
              badge: "Product principle",
            },
          ],
        },
        {
          eyebrow: "This website today",
          title: "A small static site with a small data surface.",
          paragraphs: [
            "The public website uses no first-party analytics, advertising pixels, external fonts, chat widgets, or marketing cookies. It does not sell personal data.",
            "The early-access form is disabled in this deployment. No form submission is made and no contact details are invented.",
            "GitHub Pages may keep ordinary infrastructure and security logs. MauAI does not control those platform logs.",
          ],
          tone: "paper",
        },
        {
          title: "Future phone access does not move the library by default.",
          paragraphs: [
            "Phone and tablet access is planned as a browser companion to a computer running MauAI. Processing and the library are intended to remain on that computer. This feature is planned for v1.x and is not part of the first core release.",
          ],
          quote: "Your computer is the engine. Your phone is the window.",
          tone: "navy",
        },
        {
          title: "Honest limits matter.",
          paragraphs: [
            "Local-first does not mean unhackable, perfectly private, or immune to operating-system, network, device, and user-configuration risks.",
            "Optional online features will need their own visible disclosures before they are enabled.",
          ],
        },
      ],
      cta: {
        title: "Read the exact website policy.",
        body: "The legal page describes the behavior of this static preview—not a future product promise.",
        label: "Open the privacy policy",
        target: "privacyPolicy",
      },
    },
    ro: {
      metaTitle: "Confidențialitate MauAI — Local-first prin design",
      metaDescription:
        "Înțelege principiile local-first ale MauAI, limitele funcțiilor online opționale și comportamentul real al site-ului public.",
      eyebrow: "Confidențialitate fără teatru",
      title: "Al tău, pe calculatorul tău.",
      intro:
        "Local-first este o direcție de arhitectură, nu o insignă decorativă. Nucleul este proiectat să ruleze pe dispozitivul utilizatorului fără fallback cloud tăcut.",
      note: "Principiile produsului sunt separate de comportamentul actual al site-ului.",
      sections: [
        {
          title: "Ce este proiectat să însemne local-first.",
          items: [
            {
              title: "Local implicit",
              body: "În fluxul local planificat, conversațiile și datele bibliotecii personale rămân pe calculator.",
            },
            {
              title: "Online doar la alegere",
              body: "Conectoarele online viitoare sunt planificate ca opționale, vizibile și separate de răspunsurile locale.",
              badge: "Planificat",
            },
            {
              title: "Fără fallback tăcut",
              body: "Arhitectura este proiectată să nu trimită o cerere locală către un model cloud fără o alegere clară.",
            },
            {
              title: "Export cu acord",
              body: "Rapoartele de problemă sunt gândite să pornească local și să părăsească dispozitivul numai după verificare și acord.",
              badge: "Principiu de produs",
            },
          ],
        },
        {
          eyebrow: "Site-ul de astăzi",
          title: "Un site static mic, cu o suprafață mică de date.",
          paragraphs: [
            "Site-ul public nu folosește analytics propriu, pixeli publicitari, fonturi externe, chat sau cookie-uri de marketing. Nu vinde date personale.",
            "Formularul de acces timpuriu este dezactivat în această versiune. Nu se trimite nimic și nu este inventată nicio adresă de contact.",
            "GitHub Pages poate păstra loguri obișnuite de infrastructură și securitate. MauAI nu controlează acele loguri.",
          ],
          tone: "paper",
        },
        {
          title: "Accesul viitor de pe telefon nu mută implicit biblioteca.",
          paragraphs: [
            "Accesul de pe telefon și tabletă este planificat ca un companion în browser pentru un calculator care rulează MauAI. Procesarea și biblioteca sunt gândite să rămână pe acel calculator. Funcția este planificată pentru v1.x și nu face parte din prima versiune de bază.",
          ],
          quote: "Calculatorul este motorul. Telefonul este fereastra.",
          tone: "navy",
        },
        {
          title: "Limitele spuse cinstit contează.",
          paragraphs: [
            "Local-first nu înseamnă imposibil de atacat, perfect privat sau imun la riscurile sistemului de operare, rețelei, dispozitivului și configurației utilizatorului.",
            "Funcțiile online opționale vor avea nevoie de propriile explicații vizibile înainte să fie activate.",
          ],
        },
      ],
      cta: {
        title: "Citește politica exactă a site-ului.",
        body: "Pagina legală descrie comportamentul acestei previzualizări statice, nu o promisiune despre produsul viitor.",
        label: "Deschide politica de confidențialitate",
        target: "privacyPolicy",
      },
    },
  },
  about: {
    en: {
      metaTitle: "About MauAI — A library born from a garden question",
      metaDescription:
        "The authentic origin of MauAI, Time Mau, Noah Library, and the belief that AI should navigate user-owned knowledge.",
      eyebrow: "The story behind the library",
      title: "It started with a plant in a garden.",
      intro:
        "MauAI did not begin as a startup pitch. It began with a practical question about whether a small local AI could search trusted books and answer without pretending it knew everything.",
      sections: [
        {
          title: "Model memory was not accepted as the source of truth.",
          paragraphs: [
            "A confident answer is not the same as an evidenced answer. The original experiment needed a way to open the book, inspect the passage, and understand the limit of what the source supported.",
            "That question grew into a larger idea: a personal library that can speak, explain, connect, and show where the answer came from.",
          ],
        },
        {
          eyebrow: "The names",
          title: "MauAI navigates. Noah Library carries knowledge.",
          items: [
            {
              title: "Time Mau",
              body: "The studio and publisher behind the project.",
            },
            {
              title: "MauAI",
              body: "The local-first library experience and the librarian that helps navigate it.",
            },
            {
              title: "Noah Library",
              body: "The curated, versioned, read-only knowledge product being prepared from legally distributable material.",
              badge: "In development",
            },
            {
              title: "Captain Mau",
              body: "A calm guide who does not know everything. He knows where to look.",
            },
          ],
          tone: "paper",
        },
        {
          title: "A small crew. A stubborn boundary.",
          paragraphs: [
            "Built by Mau, with a small crew of AIs and the belief that good software should remain in the hands of the person who uses it.",
            "The mission is not to build an AI that claims to know everything. It is to help people navigate knowledge they can inspect and keep.",
          ],
          quote: "Knowledge navigates. We get you there.",
          tone: "navy",
        },
      ],
      cta: {
        title: "Explore the product idea.",
        body: "See how the two libraries, visible sources, and evidence states fit together.",
        label: "See how the library works",
        target: "library",
      },
    },
    ro: {
      metaTitle: "Despre MauAI — O bibliotecă născută dintr-o întrebare din grădină",
      metaDescription:
        "Originea autentică a MauAI, Time Mau și Noah Library și ideea că AI-ul trebuie să navigheze cunoașterea deținută de utilizator.",
      eyebrow: "Povestea din spatele bibliotecii",
      title: "A început cu o plantă din grădină.",
      intro:
        "MauAI n-a pornit ca un pitch. A pornit cu o întrebare practică: poate un AI mic, local, să caute în cărți de încredere și să răspundă fără să pretindă că știe tot?",
      sections: [
        {
          title: "Memoria modelului n-a fost acceptată ca sursă a adevărului.",
          paragraphs: [
            "Un răspuns sigur pe el nu este același lucru cu un răspuns susținut de dovezi. Experimentul inițial avea nevoie de o cale de a deschide cartea, a verifica pasajul și a înțelege limita sursei.",
            "Întrebarea a crescut într-o idee mai mare: o bibliotecă personală care poate vorbi, explica, lega idei și arăta de unde vine răspunsul.",
          ],
        },
        {
          eyebrow: "Numele",
          title: "MauAI navighează. Noah Library poartă cunoașterea.",
          items: [
            {
              title: "Time Mau",
              body: "Studioul și editorul din spatele proiectului.",
            },
            {
              title: "MauAI",
              body: "Experiența bibliotecii local-first și bibliotecarul care ajută la navigarea ei.",
            },
            {
              title: "Noah Library",
              body: "Produsul de cunoaștere curatat, versionat și read-only, pregătit din material care poate fi distribuit legal.",
              badge: "În dezvoltare",
            },
            {
              title: "Căpitanul Mau",
              body: "Un ghid calm care nu știe tot. Știe unde să caute.",
            },
          ],
          tone: "paper",
        },
        {
          title: "O echipă mică. O limită încăpățânată.",
          paragraphs: [
            "Construită de Mau, cu o echipă mică de AI-uri și cu ideea că software-ul bun trebuie să rămână în mâna omului care îl folosește.",
            "Misiunea nu este un AI care pretinde că știe tot. Este un instrument care ajută oamenii să navigheze cunoașterea pe care o pot verifica și păstra.",
          ],
          quote: "Knowledge navigates. We get you there.",
          tone: "navy",
        },
      ],
      cta: {
        title: "Explorează ideea produsului.",
        body: "Vezi cum se leagă cele două biblioteci, sursele vizibile și stările dovezilor.",
        label: "Vezi cum funcționează biblioteca",
        target: "library",
      },
    },
  },
  earlyAccess: {
    en: {
      metaTitle: "Join MauAI early access",
      metaDescription:
        "Learn who MauAI's first testers will be, what will be tested, and why the signup form is not yet accepting submissions.",
      eyebrow: "Early access",
      title: "Help us build the librarian you would trust.",
      intro:
        "The first tests will focus on installation, Library search, citations, real 16 GB performance, and clear problem reporting.",
      note: "The application form is being prepared and does not submit in this deployment.",
      sections: [
        {
          title: "Who the first tests are for.",
          items: [
            {
              title: "People with real libraries",
              body: "Readers, students, researchers, and professionals with books, manuals, notes, or work documents they genuinely need to navigate.",
            },
            {
              title: "Privacy-conscious testers",
              body: "People willing to examine local-first boundaries and report where the product's explanations are unclear.",
            },
            {
              title: "Mac and Windows hardware",
              body: "Both platforms are commercial targets. Early hardware coverage, especially 16–32 GB systems, remains subject to validation.",
              badge: "Target, not guarantee",
            },
          ],
        },
        {
          title: "What testing will ask from you.",
          paragraphs: [
            "Install pre-release software, use a bounded set of your own non-sensitive documents, inspect source passages, and report problems with enough context to reproduce them.",
            "Pre-release builds may be incomplete, slow, or unavailable for a particular machine. Participation and timing are not guaranteed.",
          ],
          tone: "paper",
        },
      ],
    },
    ro: {
      metaTitle: "Înscrie-te pentru acces timpuriu MauAI",
      metaDescription:
        "Află cine vor fi primii testeri MauAI, ce va fi testat și de ce formularul nu primește încă solicitări.",
      eyebrow: "Acces timpuriu",
      title: "Ajută-ne să construim bibliotecarul în care ai avea încredere.",
      intro:
        "Primele teste vor urmări instalarea, căutarea în bibliotecă, citările, performanța reală pe 16 GB și raportarea clară a problemelor.",
      note: "Formularul este în pregătire și nu trimite date în această versiune.",
      sections: [
        {
          title: "Pentru cine sunt primele testări.",
          items: [
            {
              title: "Oameni cu biblioteci reale",
              body: "Cititori, studenți, cercetători și profesioniști cu cărți, manuale, notițe sau documente de lucru pe care chiar au nevoie să le navigheze.",
            },
            {
              title: "Testeri atenți la confidențialitate",
              body: "Oameni dispuși să verifice limitele local-first și să arate unde explicațiile produsului nu sunt suficient de clare.",
            },
            {
              title: "Hardware Mac și Windows",
              body: "Ambele platforme sunt ținte comerciale. Acoperirea inițială, mai ales pe sisteme de 16–32 GB, rămâne în curs de validare.",
              badge: "Țintă, nu garanție",
            },
          ],
        },
        {
          title: "Ce va cere testarea de la tine.",
          paragraphs: [
            "Să instalezi software pre-lansare, să folosești un set limitat de documente proprii fără date sensibile, să verifici pasajele sursă și să raportezi problemele cu suficient context.",
            "Buildurile pre-lansare pot fi incomplete, lente sau indisponibile pentru anumite calculatoare. Participarea și momentul accesului nu sunt garantate.",
          ],
          tone: "paper",
        },
      ],
    },
  },
  download: {
    en: {
      metaTitle: "Download MauAI — Pre-release status",
      metaDescription:
        "MauAI downloads are not public yet. See the truthful macOS and Windows development state and the path to early access.",
      eyebrow: "Pre-release download",
      title: "Downloads come after proof, not before.",
      intro:
        "Signed macOS and Windows builds will appear here only after installation, uninstall, requirements, licence, privacy, and checksum checks are complete.",
      note: "No public binary, version, release date, or system requirement is available yet.",
      sections: [
        {
          title: "Current platform direction.",
          items: [
            {
              title: "macOS",
              body: "A commercial target in active development. No signed public build is available.",
              badge: "In development",
            },
            {
              title: "Windows",
              body: "A commercial target in active development. Launch timing depends on real hardware validation.",
              badge: "In development",
            },
          ],
        },
        {
          title: "Local after setup is the direction.",
          paragraphs: [
            "The core is designed to work offline after installation and the required model and library packs are present. That behavior remains subject to installation and soak testing before it becomes a commercial claim.",
            "The provisional 16 GB target is still under validation. No universal hardware promise is made.",
          ],
          tone: "paper",
        },
      ],
      cta: {
        title: "Follow the honest path to a build.",
        body: "Early testing opens before public downloads, once the essential flows are ready for evidence-gated review.",
        label: "Read about early access",
        target: "earlyAccess",
      },
    },
    ro: {
      metaTitle: "Descarcă MauAI — Stare pre-lansare",
      metaDescription:
        "MauAI nu este încă disponibilă public. Vezi starea reală pentru macOS și Windows și calea către acces timpuriu.",
      eyebrow: "Descărcare pre-lansare",
      title: "Descărcarea vine după dovadă, nu înainte.",
      intro:
        "Buildurile semnate pentru macOS și Windows vor apărea aici numai după verificarea instalării, dezinstalării, cerințelor, licenței, confidențialității și checksumurilor.",
      note: "Nu există încă un binar public, o versiune, o dată sau cerințe de sistem validate.",
      sections: [
        {
          title: "Direcția actuală pentru platforme.",
          items: [
            {
              title: "macOS",
              body: "Țintă comercială în dezvoltare activă. Nu există un build public semnat.",
              badge: "În dezvoltare",
            },
            {
              title: "Windows",
              body: "Țintă comercială în dezvoltare activă. Momentul lansării depinde de validarea pe hardware real.",
              badge: "În dezvoltare",
            },
          ],
        },
        {
          title: "Direcția este local după configurare.",
          paragraphs: [
            "Nucleul este proiectat să funcționeze offline după instalare și după ce pachetele necesare de model și bibliotecă sunt prezente. Comportamentul rămâne de testat înainte să devină afirmație comercială.",
            "Ținta provizorie de 16 GB este încă în validare. Nu există o promisiune universală de hardware.",
          ],
          tone: "paper",
        },
      ],
      cta: {
        title: "Urmează calea cinstită către un build.",
        body: "Testarea timpurie se deschide înaintea descărcărilor publice, când fluxurile esențiale sunt pregătite pentru review.",
        label: "Citește despre accesul timpuriu",
        target: "earlyAccess",
      },
    },
  },
  privacyPolicy: {
    en: {
      metaTitle: "MauAI website privacy policy",
      metaDescription:
        "The data behavior of the static TimeMau / MauAI pre-launch website.",
      eyebrow: "Website privacy policy",
      title: "A policy for the website that exists today.",
      intro:
        "This page describes the static TimeMau / MauAI preview. It does not make legal or technical promises for future product features.",
      note: "Last reviewed: 26 July 2026",
      sections: [
        {
          title: "Information this site collects.",
          paragraphs: [
            "Time Mau has not added first-party analytics, advertising pixels, tracking cookies, fingerprinting, external fonts, chat widgets, or social embeds.",
            "The early-access form is disabled, so this deployment does not accept or transmit names, email addresses, hardware details, or notes.",
          ],
        },
        {
          title: "Hosting and infrastructure logs.",
          paragraphs: [
            "This static site is hosted through GitHub Pages. GitHub may process ordinary request, security, and infrastructure information under its own terms and privacy practices. Time Mau does not claim that GitHub collects nothing.",
          ],
          tone: "paper",
        },
        {
          title: "Cookies, storage, and the review gate.",
          paragraphs: [
            "The site uses no marketing cookies. The temporary review gate keeps an access marker in the browser's session storage so the visitor does not need to unlock every page during the same tab session. It is removed when the tab session ends.",
          ],
        },
        {
          title: "External links and future changes.",
          paragraphs: [
            "External websites apply their own policies. If an early-access endpoint, analytics, downloads, or other online services are added later, this policy must be updated before they are enabled.",
            "No personal data is sold by this website.",
          ],
        },
      ],
    },
    ro: {
      metaTitle: "Politica de confidențialitate a site-ului MauAI",
      metaDescription:
        "Comportamentul de date al site-ului static de pre-lansare TimeMau / MauAI.",
      eyebrow: "Politica de confidențialitate a site-ului",
      title: "O politică pentru site-ul care există astăzi.",
      intro:
        "Această pagină descrie previzualizarea statică TimeMau / MauAI. Nu face promisiuni juridice sau tehnice pentru funcțiile viitoare ale produsului.",
      note: "Ultima verificare: 26 iulie 2026",
      sections: [
        {
          title: "Informațiile colectate de acest site.",
          paragraphs: [
            "Time Mau nu a adăugat analytics propriu, pixeli publicitari, cookie-uri de urmărire, fingerprinting, fonturi externe, chat sau integrări sociale.",
            "Formularul de acces timpuriu este dezactivat, așadar această versiune nu acceptă și nu transmite nume, adrese de e-mail, detalii hardware sau note.",
          ],
        },
        {
          title: "Găzduire și loguri de infrastructură.",
          paragraphs: [
            "Site-ul static este găzduit prin GitHub Pages. GitHub poate procesa informații obișnuite despre cereri, securitate și infrastructură conform propriilor termeni și politici. Time Mau nu afirmă că GitHub nu colectează nimic.",
          ],
          tone: "paper",
        },
        {
          title: "Cookie-uri, stocare și poarta de review.",
          paragraphs: [
            "Site-ul nu folosește cookie-uri de marketing. Poarta temporară de review păstrează un marcaj de acces în session storage, astfel încât vizitatorul să nu deblocheze fiecare pagină în aceeași sesiune. Marcajul dispare la încheierea sesiunii filei.",
          ],
        },
        {
          title: "Linkuri externe și schimbări viitoare.",
          paragraphs: [
            "Site-urile externe aplică propriile politici. Dacă vor fi adăugate un endpoint de acces timpuriu, analytics, descărcări sau alte servicii online, politica trebuie actualizată înainte de activare.",
            "Acest site nu vinde date personale.",
          ],
        },
      ],
    },
  },
  terms: {
    en: {
      metaTitle: "MauAI pre-release terms",
      metaDescription:
        "Concise terms and pre-release notice for the TimeMau / MauAI informational website.",
      eyebrow: "Terms and pre-release notice",
      title: "Information, not a product release.",
      intro:
        "This website explains a product in active development. It does not offer software for sale or download.",
      note: "Last reviewed: 26 July 2026",
      sections: [
        {
          title: "Pre-release status.",
          paragraphs: [
            "Features, platforms, hardware targets, availability, and timing may change as testing continues. Nothing on this site guarantees release, access, compatibility, or continued availability.",
          ],
        },
        {
          title: "No professional advice.",
          paragraphs: [
            "Website content is informational and is not medical, legal, financial, safety, or other professional advice. External links are provided for context; their content and availability are controlled by their owners.",
          ],
          tone: "paper",
        },
        {
          title: "Intellectual property and updates.",
          paragraphs: [
            "The MauAI name, Noah Library identity, website copy, logo, and supplied artwork belong to their respective rights holders. No licence to copy or redistribute them is granted by viewing this site.",
            "These terms may be updated as the website and product move beyond pre-launch.",
          ],
        },
      ],
    },
    ro: {
      metaTitle: "Termeni MauAI pentru pre-lansare",
      metaDescription:
        "Termeni conciși și notificare de pre-lansare pentru site-ul informativ TimeMau / MauAI.",
      eyebrow: "Termeni și notificare de pre-lansare",
      title: "Informație, nu lansare de produs.",
      intro:
        "Acest site explică un produs în dezvoltare activă. Nu oferă software spre vânzare sau descărcare.",
      note: "Ultima verificare: 26 iulie 2026",
      sections: [
        {
          title: "Stare de pre-lansare.",
          paragraphs: [
            "Funcțiile, platformele, țintele hardware, disponibilitatea și momentul lansării se pot schimba pe măsură ce testarea continuă. Site-ul nu garantează lansarea, accesul, compatibilitatea sau disponibilitatea continuă.",
          ],
        },
        {
          title: "Fără consultanță profesională.",
          paragraphs: [
            "Conținutul este informativ și nu reprezintă consultanță medicală, juridică, financiară, de siguranță sau altă consultanță profesională. Linkurile externe sunt contextuale; conținutul și disponibilitatea lor aparțin proprietarilor.",
          ],
          tone: "paper",
        },
        {
          title: "Proprietate intelectuală și actualizări.",
          paragraphs: [
            "Numele MauAI, identitatea Noah Library, textele site-ului, logo-ul și ilustrațiile furnizate aparțin titularilor drepturilor. Vizitarea site-ului nu acordă o licență de copiere sau redistribuire.",
            "Acești termeni pot fi actualizați când site-ul și produsul depășesc etapa de pre-lansare.",
          ],
        },
      ],
    },
  },
};

export const faqPage = {
  en: {
    metaTitle: "MauAI FAQ — Library, privacy, sources, and availability",
    metaDescription:
      "Straight answers about MauAI, visible sources, local use, ownership, Noah Library, hardware targets, and pre-release availability.",
    eyebrow: "Frequently asked questions",
    title: "Clear questions deserve clear boundaries.",
    intro:
      "MauAI is in active development. These answers describe the product direction and distinguish plans from validated availability.",
  },
  ro: {
    metaTitle: "Întrebări MauAI — Bibliotecă, surse și disponibilitate",
    metaDescription:
      "Răspunsuri directe despre MauAI, surse vizibile, utilizare locală, proprietate, Noah Library, hardware și starea de pre-lansare.",
    eyebrow: "Întrebări frecvente",
    title: "Întrebările clare merită limite clare.",
    intro:
      "MauAI este în dezvoltare activă. Răspunsurile descriu direcția produsului și separă planurile de disponibilitatea validată.",
  },
} as const;
