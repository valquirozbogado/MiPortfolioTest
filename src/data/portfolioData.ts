import { Language } from '../i18n/translations';

export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  story: string[];
  tools: string[];
}

export interface Bio {
  name: string;
  title: string;
  pitch: string;
  paragraphs: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
}

const BIO_ES: Bio = {
  name: 'Valeria I. Quiroz Bogado',
  title: 'Diseñadora Gráfica | UX/UI',
  pitch: 'Me gusta transformar ideas en soluciones visuales que combinan creatividad, estrategia y una comunicación efectiva.',
  paragraphs: [
    'Siempre me gustó el diseño porque me permite convertir ideas en algo que las personas puedan entender, sentir y recordar. Empecé por el diseño gráfico y, con el tiempo, fui descubriendo que también me interesaban el marketing digital y la experiencia de usuario, porque entendí que un buen diseño no solo tiene que verse bien, sino también cumplir un propósito.',
    'Disfruto aprender cosas nuevas y enfrentar desafíos que me hagan crecer. Me gusta trabajar en equipo, escuchar distintas ideas y encontrar soluciones creativas para cada proyecto. Soy una persona organizada, curiosa y detallista, y siempre busco seguir mejorando tanto en lo profesional como en lo personal.',
    'Hoy mi objetivo es seguir desarrollándome en un entorno donde pueda aportar mis conocimientos, aprender de otros profesionales y crear proyectos que generen un impacto positivo.'
  ]
};

const BIO_EN: Bio = {
  name: 'Valeria I. Quiroz Bogado',
  title: 'Graphic Designer | UX/UI',
  pitch: 'I enjoy transforming ideas into visual solutions that combine creativity, strategy, and effective communication.',
  paragraphs: [
    'I have always loved design because it allows me to turn ideas into something people can understand, feel, and remember. I started in graphic design and, over time, discovered an interest in digital marketing and user experience, realizing that good design shouldn\'t just look good, but also serve a purpose.',
    'I enjoy learning new things and facing challenges that help me grow. I like working in teams, listening to different perspectives, and finding creative solutions for each project. I am organized, curious, and detail-oriented, always striving to improve both professionally and personally.',
    'Today, my goal is to continue growing in an environment where I can contribute my knowledge, learn from other professionals, and create projects that make a positive impact.'
  ]
};

const PROJECTS_ES: Project[] = [
  {
    id: 'cardiologia',
    title: 'Instituto de Cardiología de Corrientes',
    role: 'Diseñadora Gráfica',
    date: 'septiembre 2024 - febrero 2026',
    story: [
      'Diseñé contenido para redes sociales fortaleciendo la presencia digital institucional.',
      'Desarrollé piezas para campañas, eventos y comunicación interna.',
      'Produje material gráfico impreso y señalética manteniendo la identidad visual.'
    ],
    tools: ['Suite Adobe', 'CapCut', 'Canva', 'Figma', 'Notion', 'Trello', 'Word', 'Excel', 'PowerPoint', 'Google Ads', 'Meta Ads']
  }
];

const PROJECTS_EN: Project[] = [
  {
    id: 'cardiologia',
    title: 'Cardiology Institute of Corrientes',
    role: 'Graphic Designer',
    date: 'September 2024 - February 2026',
    story: [
      'Designed social media content, strengthening the institution\'s digital presence.',
      'Developed design pieces for campaigns, events, and internal communications.',
      'Produced printed graphic materials and signage while maintaining visual identity.'
    ],
    tools: ['Adobe Creative Suite', 'CapCut', 'Canva', 'Figma', 'Notion', 'Trello', 'Microsoft Office (Word, Excel, PowerPoint)', 'Google Ads', 'Meta Ads']
  }
];

const CONTACT: ContactInfo = {
  email: 'quirozbogadoval@gmail.com',
  linkedin: 'https://www.linkedin.com/in/valeriaquirozbogado/'
};

export function getBio(lang: Language): Bio {
  return lang === 'es' ? BIO_ES : BIO_EN;
}

export function getProjects(lang: Language): Project[] {
  return lang === 'es' ? PROJECTS_ES : PROJECTS_EN;
}

export function getProjectById(id: string, lang: Language): Project | undefined {
  const projects = getProjects(lang);
  return projects.find((p) => p.id === id);
}

export function getContact(): ContactInfo {
  return CONTACT;
}
