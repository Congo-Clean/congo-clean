import { NavLink, ActionAxis, ValueItem } from '../models/navigation.model';

export const SITE = {
  name: 'Congo Clean',
  tagline: 'Changer les mentalités, protéger notre environnement',
  description:
    'Organisation environnementale engagée dans la promotion d’une culture de responsabilité et de citoyenneté environnementale en République démocratique du Congo.',
  mission:
    'Contribuer au changement de mentalité dans la gestion des déchets, à l’amélioration du cadre de vie et à la promotion de comportements responsables en faveur de la protection de l’environnement.',
  location: 'République démocratique du Congo',
  email: 'contact@congoclean.org',
  phone: '+243 000 000 000',
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Nos actions', path: '/actions' },
  { label: 'Contact', path: '/contact' },
];

export const ACTION_AXES: ActionAxis[] = [
  {
    id: 'sensibilisation',
    title: 'Sensibilisation et éducation',
    summary:
      'Informer et mobiliser les communautés, particulièrement les élèves, sur les enjeux environnementaux.',
    description:
      'Nous organisons des ateliers, des campagnes scolaires et des sessions communautaires pour faire comprendre les enjeux liés à la protection de l’environnement et à la gestion responsable des déchets.',
    icon: 'graduation',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    points: [
      'Ateliers dans les écoles',
      'Campagnes de sensibilisation',
      'Formation des jeunes leaders',
    ],
  },
  {
    id: 'assainissement',
    title: 'Assainissement',
    summary:
      'Améliorer la propreté des espaces de vie et encourager des pratiques responsables.',
    description:
      'Nous contribuons à la propreté des quartiers, des espaces publics et des cadres de vie, tout en encourageant l’adoption durable de bons gestes au quotidien.',
    icon: 'broom',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    points: [
      'Opérations de nettoyage',
      'Mobilisation citoyenne',
      'Amélioration du cadre de vie',
    ],
  },
  {
    id: 'recyclage',
    title: 'Recyclage et valorisation',
    summary:
      'Promouvoir le tri, la récupération et la valorisation des déchets.',
    description:
      'Nous favorisons le tri, la récupération et la valorisation des déchets afin de réduire leur impact sur l’environnement et de soutenir une économie plus durable.',
    icon: 'recycle',
    image:
      'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1200&q=80',
    points: [
      'Promotion du tri sélectif',
      'Valorisation des déchets',
      'Économie circulaire locale',
    ],
  },
];

export const VALUES: ValueItem[] = [
  {
    title: 'Changement de mentalité',
    description:
      'L’éducation et la prise de conscience sont au cœur de notre approche.',
    icon: 'brain',
  },
  {
    title: 'Citoyenneté active',
    description:
      'Chaque citoyen peut devenir acteur d’un environnement plus propre.',
    icon: 'users',
  },
  {
    title: 'Protection durable',
    description:
      'Nous agissons pour un cadre de vie sain, aujourd’hui et pour demain.',
    icon: 'leaf',
  },
  {
    title: 'Impact concret',
    description:
      'Nos actions visent des résultats visibles dans les communautés.',
    icon: 'target',
  },
];

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80';
