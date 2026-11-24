/**
 * Testi fissi dell'interfaccia, in italiano e inglese.
 * Per modificare un testo cambia il valore qui: la chiave deve esistere in entrambe le lingue.
 */
const it = {
  'meta.title': 'Matteo Zacchino · Frontend Developer',
  'nav.about': 'Chi sono',
  'nav.experience': 'Esperienza',
  'nav.skills': 'Skills',
  'nav.projects': 'Progetti',
  'nav.contact': 'Contatti',
  'nav.switch': 'Switch to English',
  'nav.menu': 'Apri il menu',

  'hero.description':
    'Frontend Developer con una laurea magistrale in Computer Science. Creo applicazioni web moderne con Angular e TypeScript, e mi appassiona portare Computer Vision e Intelligenza Artificiale nei prodotti.',
  'hero.ctaProjects': 'Vedi i progetti',
  'hero.ctaCv': 'Scarica il CV',
  'hero.scroll': 'Scorri giù',

  'about.title': 'Su di me',
  'about.whoTitle': 'Chi sono',
  'about.who':
    'Frontend Developer di Cisterna di Latina, con una laurea magistrale in Computer Science alla Sapienza, svolta interamente in inglese.',
  'about.whatTitle': 'Cosa faccio',
  'about.what':
    "Da circa 3 anni in Go Project sviluppo applicazioni web con Angular, Ionic e TypeScript, dalla progettazione dell'interfaccia alla messa in produzione.",
  'about.focusTitle': 'Il mio focus',
  'about.focus':
    'Intelligenza Artificiale e Computer Vision: mi interessa capire come integrare questi modelli nei prodotti web.',

  'experience.title': 'Esperienza',
  'skills.title': 'Skills',
  'skills.frontend': 'Frontend',
  'skills.languages': 'Linguaggi',
  'skills.ai': 'IA e machine learning',
  'skills.other': 'Database, cloud e design',

  'projects.title': 'Progetti',
  'projects.group': 'Progetto di gruppo',
  'projects.code': 'Codice',
  'projects.noImage': 'Screenshot in arrivo',

  'contact.title': 'Contattami',
  'contact.text': 'Cerchi un Frontend Developer o vuoi parlare di un progetto? Scrivimi.',
  'footer.rights': 'Fatto con Angular',
};

export type TranslationKey = keyof typeof it;

const en: Record<TranslationKey, string> = {
  'meta.title': 'Matteo Zacchino · Frontend Developer',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'nav.switch': 'Passa all’italiano',
  'nav.menu': 'Open menu',

  'hero.description':
    'Frontend Developer with a master’s degree in Computer Science. I build modern web applications with Angular and TypeScript, and I love bringing Computer Vision and Artificial Intelligence into real products.',
  'hero.ctaProjects': 'See my projects',
  'hero.ctaCv': 'Download CV',
  'hero.scroll': 'Scroll down',

  'about.title': 'About Me',
  'about.whoTitle': 'Who I am',
  'about.who':
    'A Frontend Developer from Cisterna di Latina, Italy, with a master’s degree in Computer Science from Sapienza University of Rome, taught entirely in English.',
  'about.whatTitle': 'What I do',
  'about.what':
    'For about 3 years at Go Project I have been building web applications with Angular, Ionic and TypeScript, from interface design to production.',
  'about.focusTitle': 'My focus',
  'about.focus':
    'Artificial Intelligence and Computer Vision: I want to understand how to bring these models into web products.',

  'experience.title': 'Experience',
  'skills.title': 'Skills',
  'skills.frontend': 'Frontend',
  'skills.languages': 'Languages',
  'skills.ai': 'AI & machine learning',
  'skills.other': 'Database, cloud & design',

  'projects.title': 'Projects',
  'projects.group': 'Team project',
  'projects.code': 'Code',
  'projects.noImage': 'Screenshot coming soon',

  'contact.title': 'Get in touch',
  'contact.text':
    'Looking for a Frontend Developer or want to talk about a project? Drop me a line.',
  'footer.rights': 'Built with Angular',
};

export const TRANSLATIONS = { it, en } as const;
