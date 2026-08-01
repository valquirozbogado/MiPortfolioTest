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
  galleryGroups?: { name: string; images: string[] }[];
  links?: { label: string; url: string; thumbnail?: string }[];
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
  "/projects/boshu/img5.jpg",
  "/projects/boshu/img7.jpg",
  "/projects/boshu/img11.jpg",
  "/projects/boshu/img12.jpg",
  "/projects/boshu/img17.jpg",
  "/projects/boshu/img18.jpg",
  "/projects/boshu/img23.jpg",
  "/projects/boshu/img24.jpg",
  "/projects/boshu/img29.jpg",
  "/projects/boshu/img30.jpg",
  "/projects/boshu/img35.jpg",
  "/projects/boshu/img36.jpg",
  "/projects/boshu/img41.jpg",
  "/projects/boshu/img42.jpg",
  "/projects/boshu/img47.jpg",
  "/projects/boshu/img48.jpg",
  "/projects/boshu/img53.jpg",
  "/projects/boshu/img54.jpg",
  "/projects/boshu/img59.jpg",
  "/projects/boshu/img60.jpg",
  "/projects/boshu/img65.jpg",
  "/projects/boshu/img66.jpg"
];

const MASQUEVISUAL_GALLERY = [
  "/projects/masquevisual/img5.jpg",
  "/projects/masquevisual/img7.jpg",
  "/projects/masquevisual/img11.jpg",
  "/projects/masquevisual/img12.jpg",
  "/projects/masquevisual/img17.jpg",
  "/projects/masquevisual/img18.jpg",
  "/projects/masquevisual/img23.jpg",
  "/projects/masquevisual/img27.jpg",
  "/projects/masquevisual/img28.jpg",
  "/projects/masquevisual/img33.jpg",
  "/projects/masquevisual/img37.jpg",
  "/projects/masquevisual/img38.jpg"
];

const JUEGOSOLIMPICOS_GALLERY = [
  "/projects/juegosolimpicos/img5.jpg",
  "/projects/juegosolimpicos/img7.jpg",
  "/projects/juegosolimpicos/img8.jpg",
  "/projects/juegosolimpicos/img14.jpg",
  "/projects/juegosolimpicos/img15.jpg",
  "/projects/juegosolimpicos/img20.jpg",
  "/projects/juegosolimpicos/img21.jpg",
  "/projects/juegosolimpicos/img26.jpg",
  "/projects/juegosolimpicos/img27.jpg"
];

const FESTIVALCINE_GALLERY = [
  "/projects/festivalcine/img5.jpg",
  "/projects/festivalcine/img7.jpg",
  "/projects/festivalcine/img8.jpg",
  "/projects/festivalcine/img14.jpg",
  "/projects/festivalcine/img15.jpg",
  "/projects/festivalcine/img16.jpg",
  "/projects/festivalcine/img17.jpg",
  "/projects/festivalcine/img23.jpg",
  "/projects/festivalcine/img24.jpg",
  "/projects/festivalcine/img25.jpg",
  "/projects/festivalcine/img31.jpg",
  "/projects/festivalcine/img32.jpg",
  "/projects/festivalcine/img33.jpg",
  "/projects/festivalcine/img39.jpg",
  "/projects/festivalcine/img40.jpg",
  "/projects/festivalcine/img41.jpg",
  "/projects/festivalcine/img47.jpg",
  "/projects/festivalcine/img48.jpg",
  "/projects/festivalcine/img49.jpg",
  "/projects/festivalcine/img55.jpg",
  "/projects/festivalcine/img56.jpg",
  "/projects/festivalcine/img57.jpg"
];

const EXPORURAL_GALLERY = [
  "/projects/exporural/img5.jpg",
  "/projects/exporural/img7.jpg",
  "/projects/exporural/img11.jpg"
];

const TATUBOLITA_GALLERY = [
  "/projects/tatubolita/img5.jpg",
  "/projects/tatubolita/img7.jpg",
  "/projects/tatubolita/img19.jpg",
  "/projects/tatubolita/img25.jpg"
];


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
    tools: ['Suite Adobe', 'CapCut', 'Canva', 'Figma', 'Notion', 'Trello', 'Word', 'Excel', 'PowerPoint', 'Google Ads', 'Meta Ads'],
    image: '/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/01.png',
    galleryGroups: [
      {
        name: 'Posteos: Cardiopatías Congénitas',
        images: [
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/01.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/02.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/03.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/04.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/05.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/06.png"
        ]
      },
      {
        name: 'Posteos: Seguridad del Paciente',
        images: [
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/01.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/02.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/03.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/04.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/05.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/06.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/07.png"
        ]
      },
      {
        name: 'Posteos: Alimentos Seguros',
        images: [
          "/projects/cardiologia/posteos de instagram/consumir agua y alimentos de manera segura/01.png",
          "/projects/cardiologia/posteos de instagram/consumir agua y alimentos de manera segura/02.png",
          "/projects/cardiologia/posteos de instagram/consumir agua y alimentos de manera segura/03.png",
          "/projects/cardiologia/posteos de instagram/consumir agua y alimentos de manera segura/04.png"
        ]
      },
      {
        name: 'Historias de Instagram',
        images: [
          "/projects/cardiologia/historias de instagram/01.png",
          "/projects/cardiologia/historias de instagram/02.png",
          "/projects/cardiologia/historias de instagram/03.png",
          "/projects/cardiologia/historias de instagram/04.png",
          "/projects/cardiologia/historias de instagram/05.png",
          "/projects/cardiologia/historias de instagram/06.png",
          "/projects/cardiologia/historias de instagram/07.png"
        ]
      },
      {
        name: 'Folleto: Adulto Mayor',
        images: [
          "/projects/cardiologia/folletos/accidentes-domesticos-en-el-adulto-mayor/accidentes domesticos (en el adulto mayor)_page-0001.jpg",
          "/projects/cardiologia/folletos/accidentes-domesticos-en-el-adulto-mayor/accidentes domesticos (en el adulto mayor)_page-0002.jpg"
        ]
      },
      {
        name: 'Folleto: Lavado de Manos',
        images: [
          "/projects/cardiologia/folletos/lavado-de-manos---folleto/lavado de manos - folleto_page-0001.jpg",
          "/projects/cardiologia/folletos/lavado-de-manos---folleto/lavado de manos - folleto_page-0002.jpg"
        ]
      },
      {
        name: 'PBS: Posteos',
        images: [
          "/projects/cardiologia/pbs/posteos de instagram/pbs dia de la madre pbs.png",
          "/projects/cardiologia/pbs/posteos de instagram/pbs dia del padre_Mesa de trabajo 1 copia 3.png"
        ]
      },
      {
        name: 'PBS: Promo PBS + Tuya',
        images: [
          "/projects/cardiologia/pbs/promo pbs + tuya/afiche tuya+pbs-11.png",
          "/projects/cardiologia/pbs/promo pbs + tuya/promo pbs+tuya (historia ig)_Mesa de trabajo 1.png",
          "/projects/cardiologia/pbs/promo pbs + tuya/promo pbs+tuya (posteo feed)_Mesa de trabajo 1.png"
        ]
      }
    ],
    links: [
      { label: 'Campaña en Instagram', url: 'https://www.instagram.com/cardiologicoctes/p/DFu2wDUTQIa/?img_index=1', thumbnail: '/projects/cardiologia/links/post 4.jpg' },
      { label: 'Información de Salud', url: 'https://www.instagram.com/cardiologicoctes/p/DMaPNQuzFvI/?img_index=1', thumbnail: '/projects/cardiologia/links/post 3.jpg' },
      { label: 'Consejos y Prevención', url: 'https://www.instagram.com/cardiologicoctes/p/DTQCy01D9we/?img_index=1', thumbnail: '/projects/cardiologia/links/post 2.jpg' },
      { label: 'Novedades del Instituto', url: 'https://www.instagram.com/cardiologicoctes/p/DUGO3q6kRGb/', thumbnail: '/projects/cardiologia/links/post 1.jpg' },
      { label: 'Video Informativo', url: 'https://www.instagram.com/cardiologicoctes/reel/DMsNW-BRmM5/', thumbnail: '/projects/cardiologia/links/reel 3.jpeg' },
      { label: 'Video de Campaña', url: 'https://www.instagram.com/cardiologicoctes/reel/DPBfuzIAIMk/', thumbnail: '/projects/cardiologia/links/reel 2.jpeg' },
      { label: 'Resumen o Evento', url: 'https://www.instagram.com/cardiologicoctes/reel/DTgZQIyEWq8/', thumbnail: '/projects/cardiologia/links/reel 1.jpeg' }
    ]
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
    image: '/projects/boshu/img5.jpg',
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
    image: '/projects/masquevisual/img5.jpg',
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
    image: '/projects/juegosolimpicos/img5.jpg',
    gallery: JUEGOSOLIMPICOS_GALLERY,
    links: [
      { label: 'Sitio Web del Proyecto', url: 'https://sites.google.com/view/quiroz-bogado-valeria08joj?usp=sharing', thumbnail: '/projects/juegosolimpicos/links/joj_site.png' }
    ]
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
    image: '/projects/festivalcine/img5.jpg',
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
    image: '/projects/exporural/img5.jpg',
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
    image: '/projects/tatubolita/img5.jpg',
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
    tools: ['Adobe Creative Suite', 'CapCut', 'Canva', 'Figma', 'Notion', 'Trello', 'Microsoft Office (Word, Excel, PowerPoint)', 'Google Ads', 'Meta Ads'],
    image: '/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/01.png',
    galleryGroups: [
      {
        name: 'Posts: Congenital Heart Defects',
        images: [
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/01.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/02.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/03.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/04.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/05.png",
          "/projects/cardiologia/posteos de instagram/día de las cardiopatías congénitas/06.png"
        ]
      },
      {
        name: 'Posts: Patient Safety',
        images: [
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/01.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/02.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/03.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/04.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/05.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/06.png",
          "/projects/cardiologia/posteos de instagram/día de la seguridad del paciente/07.png"
        ]
      },
      {
        name: 'Posts: Safe Food & Water',
        images: [
          "/projects/cardiologia/posteos de instagram/consumir agua y alimentos de manera segura/01.png",
          "/projects/cardiologia/posteos de instagram/consumir agua y alimentos de manera segura/02.png",
          "/projects/cardiologia/posteos de instagram/consumir agua y alimentos de manera segura/03.png",
          "/projects/cardiologia/posteos de instagram/consumir agua y alimentos de manera segura/04.png"
        ]
      },
      {
        name: 'Instagram Stories',
        images: [
          "/projects/cardiologia/historias de instagram/01.png",
          "/projects/cardiologia/historias de instagram/02.png",
          "/projects/cardiologia/historias de instagram/03.png",
          "/projects/cardiologia/historias de instagram/04.png",
          "/projects/cardiologia/historias de instagram/05.png",
          "/projects/cardiologia/historias de instagram/06.png",
          "/projects/cardiologia/historias de instagram/07.png"
        ]
      },
      {
        name: 'Brochure: Elderly Care',
        images: [
          "/projects/cardiologia/folletos/accidentes-domesticos-en-el-adulto-mayor/accidentes domesticos (en el adulto mayor)_page-0001.jpg",
          "/projects/cardiologia/folletos/accidentes-domesticos-en-el-adulto-mayor/accidentes domesticos (en el adulto mayor)_page-0002.jpg"
        ]
      },
      {
        name: 'Brochure: Hand Washing',
        images: [
          "/projects/cardiologia/folletos/lavado-de-manos---folleto/lavado de manos - folleto_page-0001.jpg",
          "/projects/cardiologia/folletos/lavado-de-manos---folleto/lavado de manos - folleto_page-0002.jpg"
        ]
      },
      {
        name: 'PBS: Posts',
        images: [
          "/projects/cardiologia/pbs/posteos de instagram/pbs dia de la madre pbs.png",
          "/projects/cardiologia/pbs/posteos de instagram/pbs dia del padre_Mesa de trabajo 1 copia 3.png"
        ]
      },
      {
        name: 'PBS: Promo PBS + Tuya',
        images: [
          "/projects/cardiologia/pbs/promo pbs + tuya/afiche tuya+pbs-11.png",
          "/projects/cardiologia/pbs/promo pbs + tuya/promo pbs+tuya (historia ig)_Mesa de trabajo 1.png",
          "/projects/cardiologia/pbs/promo pbs + tuya/promo pbs+tuya (posteo feed)_Mesa de trabajo 1.png"
        ]
      }
    ],
    links: [
      { label: 'Instagram Campaign', url: 'https://www.instagram.com/cardiologicoctes/p/DFu2wDUTQIa/?img_index=1', thumbnail: '/projects/cardiologia/links/post 4.jpg' },
      { label: 'Health Information', url: 'https://www.instagram.com/cardiologicoctes/p/DMaPNQuzFvI/?img_index=1', thumbnail: '/projects/cardiologia/links/post 3.jpg' },
      { label: 'Tips & Prevention', url: 'https://www.instagram.com/cardiologicoctes/p/DTQCy01D9we/?img_index=1', thumbnail: '/projects/cardiologia/links/post 2.jpg' },
      { label: 'Institute News', url: 'https://www.instagram.com/cardiologicoctes/p/DUGO3q6kRGb/', thumbnail: '/projects/cardiologia/links/post 1.jpg' },
      { label: 'Informational Video', url: 'https://www.instagram.com/cardiologicoctes/reel/DMsNW-BRmM5/', thumbnail: '/projects/cardiologia/links/reel 3.jpeg' },
      { label: 'Campaign Video', url: 'https://www.instagram.com/cardiologicoctes/reel/DPBfuzIAIMk/', thumbnail: '/projects/cardiologia/links/reel 2.jpeg' },
      { label: 'Summary or Event', url: 'https://www.instagram.com/cardiologicoctes/reel/DTgZQIyEWq8/', thumbnail: '/projects/cardiologia/links/reel 1.jpeg' }
    ]
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
    image: '/projects/boshu/img5.jpg',
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
    image: '/projects/masquevisual/img5.jpg',
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
    image: '/projects/juegosolimpicos/img5.jpg',
    gallery: JUEGOSOLIMPICOS_GALLERY,
    links: [
      { label: 'Project Website', url: 'https://sites.google.com/view/quiroz-bogado-valeria08joj?usp=sharing', thumbnail: '/projects/juegosolimpicos/links/joj_site.png' }
    ]
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
    image: '/projects/festivalcine/img5.jpg',
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
    image: '/projects/exporural/img5.jpg',
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
    image: '/projects/tatubolita/img5.jpg',
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
