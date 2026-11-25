// ============================================================
// All site text lives here — edit once, desktop and mobile both update.
// Values may contain simple HTML (<br>, <time>, <small>).
// ============================================================

const TEXT = {
  // ---- Top bar / menu
  "brand.short": "DHU EPC 2027", // top bar (until the logo arrives)
  brand: 'DHU English Presentation <br class="m-br">Contest 2027', // <br class="m-br"> = line break in the mobile footer only
  "nav.about": "ABOUT",
  "nav.teams": "TEAMS",
  "nav.people": "PEOPLE",
  "menu.no1": "01",
  "menu.no2": "02",
  "menu.no3": "03",
  "menu.foot":
    "DHU ENGLISH PRESENTATION CONTEST 2027<br>2027 / 01 / 28 (THU) — SURUGADAI HALL",
  // ---- Hero
  "hero.sheet": "SHEET 01 — THE GIFT",
  "hero.title0": "DHU",
  "hero.title1": "ENGLISH",
  "hero.title2": "PRESENTATION",
  "hero.title3": "CONTEST",
  "hero.year": "2027",
  "hero.tagline": "20TH ANNIVERSARY — CHINA<br>A GIFT FROM NOW TO THE FUTURE",
  "hero.cta": 'GRAB A CUP <i class="arrow">→</i>',
  "hero.scroll": "SCROLL ↓",
  "hero.cup.section": "HALF SECTION",
  "hero.cup.dimension": "Ø 20 YEARS",
  "hero.table.head": "PROJECT No. 20",
  "hero.table.projectLabel": "PROJECT:",
  "hero.table.project": "DHU ENGLISH PRESENTATION CONTEST 2027",
  "hero.table.themeLabel": "THEME:",
  "hero.table.theme": "INSPIRE THE WORLD",
  "hero.table.dateLabel": "DATE:",
  "hero.table.date":
    '<time datetime="2027-01-28T19:00">2027 / 01 / 28 (THU) 19:00-21:00</time>  REV. 20',
  "hero.table.venueLabel": "VENUE:",
  "hero.table.venue": "SURUGADAI HALL",
  "hero.table.notesLabel": "NOTES:",
  "hero.table.notes": "IT’S GONNA BE GOOD. THAT’S THE TEA.",
  // ---- Teams
  "teams.sheet": "SHEET 02 — TEAMS",
  "teams.lead":
    "Grab a cup. Our students always have the best tea. That’s the tea.",
  "teams.groupSAB": "SA–B",
  "teams.countSAB": "3 TEAMS",
  "teams.groupCE": "C–E",
  "teams.countCE": "1 TEAM",
  // ---- People
  "people.sheet": "SHEET 03 — CREDITS",
  "people.lead": "MC, judges and our special thanks. Details coming soon.",
  "people.mc": "MC",
  "people.tba": "TBA",
  "people.nameAff": "Name / Affiliation",
  "people.judges": "JUDGES",
  "people.thanks": "SPECIAL THANKS",
  // Names under the photos (photo: people/<key>.jpg)
  "people.moteki": "Miho Moteki",
  "people.fujii": "Naotaka Fujii",
  "people.yoshimura": "Takeshi Yoshimura",
  "people.ebata": "Makiko Ebata Yamada",
  "people.students": "Student Judges",
  "people.studentsAff": "Two DHU students",
  // ---- Footer
  "footer.credit": "Concept &amp; Design: Youmi Nagase",
  "footer.copyright": "<small>© DHU EPC 2027</small>",
  // ---- About page (about.html)
  "about.sheet": "SHEET 04 — SPECIFICATION",
  "about.title": "ABOUT",
  "about.contest.head": "THE CONTEST",
  "about.contest.body":
    "The DHU English Presentation Contest is where Digital Hollywood University students take the stage and present their own projects — entirely in English. Teams pitch the ideas, prototypes and stories they have been building to an audience and a panel of judges.<br><br>2027 marks the 20th contest, under the theme “Inspire the World.”",
  "about.info.head": "EVENT INFORMATION",
  "about.info.eventLabel": "EVENT:",
  "about.info.event": "DHU ENGLISH PRESENTATION CONTEST 2027",
  "about.info.themeLabel": "THEME:",
  "about.info.theme": "INSPIRE THE WORLD",
  "about.info.editionLabel": "EDITION:",
  "about.info.edition": "20TH",
  "about.info.dateLabel": "DATE:",
  "about.info.date": '<time datetime="2027-01-28">2027 / 01 / 28 (THU)</time>',
  "about.info.timeLabel": "TIME:",
  "about.info.time": "19:00-21:00",
  "about.info.venueLabel": "VENUE:",
  "about.info.venue": "SURUGADAI HALL",
  "about.info.admissionLabel": "ADMISSION:",
  "about.info.admission": "TBA",
  "about.info.languageLabel": "LANGUAGE:",
  "about.info.language": "ENGLISH",
  "about.print.head": "WHY A BLUEPRINT?",
  "about.print.body":
    "A blueprint is a plan — the drawing that comes before anything is built, printed white on blue the cyanotype way since the 1840s.<br><br>In slang, “the blueprint” is also the original: the one that set the standard for everyone after. I think the word fits DHU students — people who draw up their own plans and build what doesn’t exist yet. It is also my hope for them: to become the blueprint that others follow.<br><br>I didn’t know this year’s theme when I chose the blueprint — “Inspire the World.” It turns out they mean the same thing.",
  "about.def.head": "BLUEPRINT (n.)",
  "about.def.1Label": "1.",
  "about.def.1": "A DETAILED PLAN OR DRAWING",
  "about.def.2Label": "2.",
  "about.def.2": "(SLANG) AN ORIGINAL",
  "about.def.printLabel": "PRINT:",
  "about.def.print": "WHITE ON BLUE — CYANOTYPE",
  "about.cup.head": "WHY A TEACUP?",
  "about.cup.body":
    "In the English-speaking tradition, the gift for a 20th anniversary is china — porcelain. Fired at high heat, it is hard to make and built to last. Just like DHU students.<br><br>For our 20th contest, this site is drawn as that gift: a teacup, rendered as a blueprint. Grab a cup — our students always have the best tea.",
  "about.gifts.head": "ANNIVERSARY GIFTS",
  "about.gift1n": "1ST",
  "about.gift1": "PAPER",
  "about.gift5n": "5TH",
  "about.gift5": "WOOD",
  "about.gift10n": "10TH",
  "about.gift10": "TIN",
  "about.gift15n": "15TH",
  "about.gift15": "CRYSTAL",
  "about.gift20n": "20TH",
  "about.gift20": "CHINA",
  "about.gift25n": "25TH",
  "about.gift25": "SILVER",
  "about.gift30n": "30TH",
  "about.gift30": "PEARL",
};

// Teams: shown on the cards and in the modal (from each team's info doc).
// Photo: teams/<key>/<key>_main.jpg
const TEAMS = {
  'eigottesa-ez': {
    label: 'SA–B  /  TEAM 01',
    project: 'inEX',
    team: 'EigotteSA, Ez   /   英語ってSA, Ez',
    members: ['Nobuteru Mamiya', 'Maiko Zen', 'Aishah Iwamura', 'Marin Honoki', 'Youmi Nagase', 'Masayoshi Hosokawa', 'Misaki Nishihara', 'Daiki Nagai', 'Nanasa Azuma', 'Yunosuke Kimura', 'Momoka Nakanishi', 'Soomin Sim', 'Shu Izumi', 'Koichi Masayama', 'Ginga Parent', 'Makiko Ebata Yamada'],
  },
  'nun-tan': {
    label: 'SA–B  /  TEAM 02',
    project: 'Who’s attractive to the opposite sex, by generation?',
    team: 'Nun-tan',
    members: ['Arashi Otsuka'],
  },
  'rono': {
    label: 'SA–B  /  TEAM 03',
    project: 'Paleo Collect',
    team: 'Rono',
    members: ['Riku Mito'],
  },
  'were-creatures': {
    label: 'C–E  /  TEAM 04',
    project: 'Exploration Adventure Game',
    team: 'We’re Creatures',
    members: ['Natsume Tsukamoto', 'Yukino Kurata', 'Misora Sugano', 'Sayoko Ishii', 'Yui Mizoguchi', 'Ruri Nakamura'],
    about: 'Explore the town, collect items, talk to its residents, and search for your parents. The theme of this game is love. There are multiple endings, and the choices you make throughout the game will determine which ending you reach.',
  },
};

// Fill the page from TEXT / TEAMS (runs before script.js; both are deferred).
(function fill() {
  document.querySelectorAll('[data-text]').forEach((el) => {
    const v = TEXT[el.dataset.text];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('.card[data-team]').forEach((card) => {
    const t = TEAMS[card.dataset.team];
    if (!t) return;
    card.querySelectorAll('[data-field]').forEach((el) => { el.textContent = t[el.dataset.field]; });
    const img = card.querySelector('img');
    if (img) img.alt = `Team ${t.team}`;
  });
})();
