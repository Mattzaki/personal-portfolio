import { Localized } from '../i18n/language.service';

/**
 * Tutti i contenuti del portfolio stanno qui.
 * Per aggiungere un progetto basta aggiungere un oggetto a PROJECTS
 * e mettere l'immagine in public/projects/.
 */

export const PROFILE = {
  name: 'Matteo Zacchino',
  email: 'matteo.zacchino2000@gmail.com',
  linkedin: 'https://www.linkedin.com/in/matteo-zacchino-bb674218b/',
  github: 'https://github.com/Mattzaki',
  /** Metti il PDF del CV in public/cv/ con questo nome. */
  cv: 'cv/Matteo_Zacchino_CV.pdf',
  /** Ruoli che scorrono nel titolo con l'effetto macchina da scrivere. */
  roles: [
    { it: 'Frontend Developer', en: 'Frontend Developer' },
    { it: 'Angular Developer', en: 'Angular Developer' },
    { it: 'Appassionato di IA', en: 'AI Enthusiast' },
  ] satisfies Localized[],
};

export interface ExperienceItem {
  title: Localized;
  place: Localized;
  period: Localized;
  description: Localized;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: { it: 'Frontend Developer', en: 'Frontend Developer' },
    place: { it: 'Go Project S.r.l., Roma', en: 'Go Project S.r.l., Rome' },
    period: { it: '2024 — oggi', en: '2024 — present' },
    description: {
      it: 'Gestionale aziendale in Angular e Ionic, riprogettazione completa di un sito di prenotazioni, portale web per clienti esteri, integrazione di modelli di Intelligenza Artificiale.',
      en: 'Company management platform in Angular and Ionic, full redesign of a booking website, web portal for international clients, integration of Artificial Intelligence models.',
    },
  },
  {
    title: {
      it: 'Laurea magistrale in Computer Science',
      en: 'Master’s Degree in Computer Science',
    },
    place: {
      it: 'Sapienza Università di Roma · corso interamente in inglese',
      en: 'Sapienza University of Rome · taught entirely in English',
    },
    period: { it: '2023 — 2026', en: '2023 — 2026' },
    description: {
      it: 'Focus su Intelligenza Artificiale, machine learning e Computer Vision.',
      en: 'Focus on Artificial Intelligence, machine learning and Computer Vision.',
    },
  },
  {
    title: { it: 'Laurea triennale in Informatica', en: 'Bachelor’s Degree in Computer Science' },
    place: { it: 'Sapienza Università di Roma', en: 'Sapienza University of Rome' },
    period: { it: '2020 — 2023', en: '2020 — 2023' },
    description: { it: '', en: '' },
  },
];

export type SkillColor = 'pink' | 'blue' | 'green' | 'purple';

export interface SkillGroup {
  labelKey: 'skills.frontend' | 'skills.languages' | 'skills.ai' | 'skills.other';
  color: SkillColor;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    labelKey: 'skills.frontend',
    color: 'pink',
    items: ['Angular', 'TypeScript', 'Ionic', 'JavaScript', 'HTML', 'CSS', 'Three.js', 'Flutter'],
  },
  { labelKey: 'skills.languages', color: 'blue', items: ['Java', 'Python', 'C', 'C++', 'C#'] },
  {
    labelKey: 'skills.ai',
    color: 'green',
    items: ['PyTorch', 'PyTorch Lightning', 'TensorFlow', 'Computer Vision'],
  },
  { labelKey: 'skills.other', color: 'purple', items: ['MySQL', 'AWS', 'Figma'] },
];

export interface Project {
  title: string;
  description: Localized;
  tech: string[];
  link: string;
  /** Percorso in public/, oppure null per mostrare un segnaposto. */
  image: string | null;
  imageAlt: Localized;
  /** 'cover' riempie il riquadro, 'contain' mostra l'immagine intera (per i loghi). */
  imageFit: 'cover' | 'contain';
  imageBackground?: string;
  team: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'EgoGesture Recognition',
    description: {
      it: 'Riconoscimento di gesti da video in prima persona: confronto tra modelli leggeri come ShuffleNet e il più pesante ResNeXt.',
      en: 'Gesture recognition from first-person video: benchmarking lightweight models such as ShuffleNet against the heavier ResNeXt.',
    },
    tech: ['Python', 'PyTorch', 'PyTorch Lightning', 'Computer Vision'],
    link: 'https://github.com/Nhix00/EgoGesture_Recognition',
    image: null,
    imageAlt: { it: 'EgoGesture Recognition', en: 'EgoGesture Recognition' },
    imageFit: 'cover',
    team: true,
  },
  {
    title: 'Earth-Defenders',
    description: {
      it: 'Web app ispirata a Space Invaders, con account, punteggi e classifica. In homepage, oggetti 3D interattivi ed effetto parallasse.',
      en: 'A web app inspired by Space Invaders, with accounts, scores and a leaderboard. The homepage features interactive 3D objects and a parallax effect.',
    },
    tech: ['JavaScript', 'Three.js', 'PHP', 'MySQL'],
    link: 'https://github.com/Flavio0410/Earth-Defenders',
    image: 'projects/earth-defenders.jpg',
    imageAlt: { it: 'Homepage di Earth-Defenders', en: 'Earth-Defenders homepage' },
    imageFit: 'cover',
    team: true,
  },
  {
    title: 'Greenlivery',
    description: {
      it: "UI kit in Figma per un'app di consegne sostenibili, con tracciamento in tempo reale e scelta di opzioni eco-friendly.",
      en: 'A Figma UI kit for a sustainable delivery app, with real-time tracking and eco-friendly delivery options.',
    },
    tech: ['Figma', 'UI/UX', 'Prototyping', 'Mobile'],
    link: 'https://github.com/Flavio0410/Greenlivery',
    image: 'projects/greenlivery.png',
    imageAlt: { it: 'Logo di Greenlivery', en: 'Greenlivery logo' },
    imageFit: 'contain',
    imageBackground: '#b5c99a',
    team: true,
  },
  {
    title: 'Juno',
    description: {
      it: 'Il classico gioco di carte rivisitato in Java, con nuove modalità di gioco, carte speciali e scenari a tema.',
      en: 'The classic card game reimagined in Java, with new game modes, special cards and themed scenarios.',
    },
    tech: ['Java', 'JavaFX', 'Design Patterns'],
    link: 'https://github.com/MatteoZak/Juno',
    image: null,
    imageAlt: { it: 'Juno', en: 'Juno' },
    imageFit: 'cover',
    team: false,
  },
  {
    title: 'Poisson Disc Sampling',
    description: {
      it: 'Genera punti distribuiti in modo uniforme con una distanza minima, visualizzati in Pygame. Uno script Blender li trasforma in scene 3D, come una foresta.',
      en: 'Generates evenly distributed points with a minimum distance, visualised in Pygame. A Blender script turns them into 3D scenes, such as a forest.',
    },
    tech: ['Python', 'Pygame', 'Blender', 'Procedural generation'],
    link: 'https://github.com/Mattzaki/Poisson_Disc_Sampling',
    image: 'projects/poisson-disc-sampling.jpg',
    imageAlt: {
      it: 'Alberi generati con Poisson Disc Sampling in Blender',
      en: 'Trees generated with Poisson Disc Sampling in Blender',
    },
    imageFit: 'cover',
    team: false,
  },
];
