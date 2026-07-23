import type { Language } from '../i18n/translations';

export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  story: string[];
  tools: string[];
  image?: string;
  gallery?: string[];
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
  behance: string;
  phone: string;
}

const BOSH_GALLERY = [
  '/projects/bosh____proyecto_taller_2_dg_unne____behance_pdf_img_0_1200x849.png',
  ...Array.from({ length: 21 }, (_, i) => `/projects/bosh____proyecto_taller_2_dg_unne____behance_pdf_img_${i + 1}_842x596.png`)
];

const MASQUEVISUAL_GALLERY = [
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_0_1400x787.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_1_1400x787.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_2_1400x787.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_3_1400x787.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_4_1400x787.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_5_1400x1050.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_6_1400x787.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_7_1400x787.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_8_1400x1050.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_9_1400x1050.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_10_1400x787.png',
  '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_11_1400x1050.png'
];

const JUEGOSOLIMPICOS_GALLERY = Array.from(
  { length: 8 },
  (_, i) => `/projects/_juegos_ol_mpicos_de_la_juventud____tipograf_a_2_unne____behance_pdf_img_${i}_1400x666.png`
);

const FESTIVALCINE_GALLERY = [
  '/projects/_festival_de_cine_de_ficci_n____tipograf_a_unne_2021____behance_pdf_img_0_1400x442.png',
  ...Array.from({ length: 21 }, (_, i) => `/projects/_festival_de_cine_de_ficci_n____tipograf_a_unne_2021____behance_pdf_img_${i + 1}_1400x450.png`)
];

const EXPORURAL_GALLERY = [
  '/projects/expo_rural_chaco_2022____behance_pdf_img_0_1400x933.png',
  '/projects/expo_rural_chaco_2022____behance_pdf_img_1_1400x933.png',
  '/projects/expo_rural_chaco_2022____behance_pdf_img_2_1400x1400.png'
];

const TATUBOLITA_GALLERY = Array.from(
  { length: 4 },
  (_, i) => `/projects/tat__bolita___morfolog_a_dg_unne____behance_pdf_img_${i}_1400x990.png`
);

const BIO_ES: Bio = {
  name: 'Valeria Quiroz Bogado',
  title: 'Diseñadora Gráfica | UX/UI',
  pitch: 'Me gusta transformar ideas en soluciones visuales que combinan creatividad, estrategia y una comunicación efectiva.',
  paragraphs: [
    'Soy diseñadora gráfica, egresada de la UNNE. Me encuentro capacitada en Accesibilidad y Experiencia de Usuario, por lo cual mi enfoque no solo se centra en lo visual sino en la funcionalidad y accesibilidad de cada producto.',
    'Tengo experiencia en diseño de productos físicos y digitales (afiches, papelería de evento, merch, packaging, contenido multimedia, apps, sitios web, etc.).',
    'Mi objetivo es seguir fortaleciendo mis habilidades y ampliando mis conocimientos, que me permita mejorar y enfrentar nuevos desafíos.'
  ]
};

const BIO_EN: Bio = {
  name: 'Valeria Quiroz Bogado',
  title: 'Graphic Designer | UX/UI',
  pitch: 'I enjoy transforming ideas into visual solutions that combine creativity, strategy, and effective communication.',
  paragraphs: [
    'I am a graphic designer, graduated from UNNE. I am trained in Accessibility and User Experience, which is why my focus is not only on visuals but also on the functionality and accessibility of each product.',
    'I have experience in designing physical and digital products (posters, event stationery, merch, packaging, multimedia content, apps, websites, etc.).',
    'My goal is to continue strengthening my skills and expanding my knowledge, allowing me to improve and face new challenges.'
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
  },
  {
    id: 'boshu',
    title: 'Boshú — Naming & Branding',
    role: 'Diseñadora Gráfica',
    date: 'Proyecto Académico (UNNE)',
    story: [
      'Desarrollé una propuesta integral de branding, identidad visual y naming para una fundación ecológica ficticia.',
      'Diseñé piezas de papelería institucional, incluyendo hojas membretadas, carpetas A4 y gafetes de acreditación.',
      'Creé la estrategia de redes sociales con plantillas de Instagram stories, banners promocionales y merchandising como remeras y packaging ecológico.'
    ],
    tools: ['Illustrator', 'Photoshop', 'Branding', 'Naming', 'Editorial Layout', 'Merchandising'],
    image: '/projects/bosh____proyecto_taller_2_dg_unne____behance_pdf_img_0_1200x849.png',
    gallery: BOSH_GALLERY
  },
  {
    id: 'masquevisual',
    title: '+ que visual — Campaña de Accesibilidad',
    role: 'Diseñadora Gráfica / UX',
    date: 'Proyecto Final de Carrera (UNNE)',
    story: [
      'Creé una campaña de capacitación y concientización sobre accesibilidad digital orientada específicamente a diseñadores gráficos.',
      'Diseñé y prototipé interfaces adaptativas (UX/UI) enfocadas en garantizar la legibilidad y el correcto uso tipográfico.',
      'Desarrollé piezas de comunicación con una estética moderna para destacar la importancia de un diseño inclusivo.'
    ],
    tools: ['Figma', 'Illustrator', 'UX/UI Design', 'Accessibility', 'Campaña Social'],
    image: '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_0_1400x787.png',
    gallery: MASQUEVISUAL_GALLERY
  },
  {
    id: 'juegosolimpicos',
    title: 'Juegos Olímpicos de la Juventud',
    role: 'Diseñadora Web / UX',
    date: 'Proyecto Académico (UNNE)',
    story: [
      'Diseñé el prototipo de un sitio web ficticio para el evento de los Juegos Olímpicos de la Juventud.',
      'Estructuré la jerarquía visual de información compleja combinando sistemas de tipografía avanzada.',
      'Optimicé la interfaz para asegurar una navegación intuitiva y una correcta adaptabilidad para pantallas móviles.'
    ],
    tools: ['Figma', 'UX/UI Design', 'Typography System', 'Responsive Design'],
    image: '/projects/_juegos_ol_mpicos_de_la_juventud____tipograf_a_2_unne____behance_pdf_img_0_1400x666.png',
    gallery: JUEGOSOLIMPICOS_GALLERY
  },
  {
    id: 'festivalcine',
    title: 'Festival de Cine de Ficción del Nordeste',
    role: 'Diseñadora Editorial',
    date: 'Proyecto Académico (UNNE)',
    story: [
      'Diseñé una propuesta editorial de doble página para el catálogo del festival de cine ficticio.',
      'Trabajé en la composición tipográfica de alto impacto visual y el uso de retículas para la legibilidad de contenidos densos.',
      'Experimenté con jerarquías y contrastes cromáticos en color amarillo y negro para generar una estética cinematográfica potente.'
    ],
    tools: ['Illustrator', 'InDesign', 'Editorial Design', 'Grid System', 'Typography'],
    image: '/projects/_festival_de_cine_de_ficci_n____tipograf_a_unne_2021____behance_pdf_img_0_1400x442.png',
    gallery: FESTIVALCINE_GALLERY
  },
  {
    id: 'exporural',
    title: 'Expo Rural Chaco 2022',
    role: 'Diseñadora Gráfica',
    date: '2022',
    story: [
      'Diseñé la identidad visual y piezas de comunicación para la Expo Rural Chaco 2022.',
      'Desarrollé la señalética y cartelería del evento promoviendo la claridad de la información.',
      'Creé el branding y piezas publicitarias impresas y digitales para redes sociales.'
    ],
    tools: ['Illustrator', 'Photoshop', 'Branding', 'Signage', 'Social Media'],
    image: '/projects/expo_rural_chaco_2022____behance_pdf_img_0_1400x933.png',
    gallery: EXPORURAL_GALLERY
  },
  {
    id: 'tatubolita',
    title: 'Tatú Bolita — Morfología',
    role: 'Diseñadora Gráfica',
    date: 'Proyecto Académico (UNNE)',
    story: [
      'Realicé un análisis morfológico detallado del tatú bolita para traducirlo en un sistema visual complejo.',
      'Diseñé y construí piezas gráficas abstractas basadas en la morfología y textura de este animal.',
      'Desarrollé una lámina de presentación técnica y composiciones tipográficas experimentales.'
    ],
    tools: ['Illustrator', 'Editorial Layout', 'Morfología', 'Sistemas Visuales'],
    image: '/projects/tat__bolita___morfolog_a_dg_unne____behance_pdf_img_0_1400x990.png',
    gallery: TATUBOLITA_GALLERY
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
  },
  {
    id: 'boshu',
    title: 'Boshú — Naming & Branding',
    role: 'Graphic Designer',
    date: 'Academic Project (UNNE)',
    story: [
      'Developed a comprehensive branding, visual identity, and naming proposal for a fictitious ecological foundation.',
      'Designed institutional stationery items, including letterheads, A4 folders, and accreditation badges.',
      'Created a social media strategy with Instagram stories templates, promotional banners, and merchandising such as t-shirts and ecological packaging.'
    ],
    tools: ['Illustrator', 'Photoshop', 'Branding', 'Naming', 'Editorial Layout', 'Merchandising'],
    image: '/projects/bosh____proyecto_taller_2_dg_unne____behance_pdf_img_0_1200x849.png',
    gallery: BOSH_GALLERY
  },
  {
    id: 'masquevisual',
    title: '+ que visual — Accessibility Campaign',
    role: 'Graphic Designer / UX',
    date: 'Graduation Project (UNNE)',
    story: [
      'Created an accessibility training and awareness campaign tailored specifically for graphic designers.',
      'Designed and prototyped responsive interfaces (UX/UI) focusing on readability and proper typography usage.',
      'Developed modern promotional pieces to emphasize the importance of inclusive design.'
    ],
    tools: ['Figma', 'Illustrator', 'UX/UI Design', 'Accessibility', 'Social Campaign'],
    image: '/projects/__que_visual___proyecto_final_de_carrera_dg_unne____behance_pdf_img_0_1400x787.png',
    gallery: MASQUEVISUAL_GALLERY
  },
  {
    id: 'juegosolimpicos',
    title: 'Youth Olympic Games',
    role: 'Web Designer / UX',
    date: 'Academic Project (UNNE)',
    story: [
      'Designed the layout and prototype of a fictitious website for the Youth Olympic Games event.',
      'Structured the visual hierarchy of complex scheduling information using advanced typography systems.',
      'Optimized the interface for seamless navigation and proper mobile responsiveness.'
    ],
    tools: ['Figma', 'UX/UI Design', 'Typography System', 'Responsive Design'],
    image: '/projects/_juegos_ol_mpicos_de_la_juventud____tipograf_a_2_unne____behance_pdf_img_0_1400x666.png',
    gallery: JUEGOSOLIMPICOS_GALLERY
  },
  {
    id: 'festivalcine',
    title: 'Northeast Fiction Film Festival',
    role: 'Editorial Designer',
    date: 'Academic Project (UNNE)',
    story: [
      'Designed a double-page editorial catalog proposal for the fictitious film festival.',
      'Worked on high-impact typographic compositions and grid systems to ensure catalog readability.',
      'Experimented with hierarchies and color contrast in black and yellow to generate a strong cinematic identity.'
    ],
    tools: ['Illustrator', 'InDesign', 'Editorial Design', 'Grid System', 'Typography'],
    image: '/projects/_festival_de_cine_de_ficci_n____tipograf_a_unne_2021____behance_pdf_img_0_1400x442.png',
    gallery: FESTIVALCINE_GALLERY
  },
  {
    id: 'exporural',
    title: 'Expo Rural Chaco 2022',
    role: 'Graphic Designer',
    date: '2022',
    story: [
      'Designed the visual identity and communication pieces for the Expo Rural Chaco 2022 event.',
      'Developed event signage and posters to ensure clear informational hierarchy.',
      'Created branding, print ads, and digital promotional assets for social media.'
    ],
    tools: ['Illustrator', 'Photoshop', 'Branding', 'Signage', 'Social Media'],
    image: '/projects/expo_rural_chaco_2022____behance_pdf_img_0_1400x933.png',
    gallery: EXPORURAL_GALLERY
  },
  {
    id: 'tatubolita',
    title: 'Tatú Bolita — Morphology',
    role: 'Graphic Designer',
    date: 'Academic Project (UNNE)',
    story: [
      'Performed a detailed morphological analysis of the "tatú bolita" (armadillo) to translate it into a complex visual system.',
      'Designed and constructed abstract graphic pieces based on the animal\'s shape and textures.',
      'Developed a technical presentation board and experimental typographic compositions.'
    ],
    tools: ['Illustrator', 'Editorial Layout', 'Morfología', 'Sistemas Visuales'],
    image: '/projects/tat__bolita___morfolog_a_dg_unne____behance_pdf_img_0_1400x990.png',
    gallery: TATUBOLITA_GALLERY
  }
];

const CONTACT: ContactInfo = {
  email: 'quirozbogadoval@gmail.com',
  linkedin: 'https://www.linkedin.com/in/valeriaquirozbogado/',
  behance: 'https://www.behance.net/valeriaquirozbogado',
  phone: '+543625144739'
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
