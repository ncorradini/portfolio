export const SECTIONS = ['aboutme', 'proyects', 'contact'];

export const tradSection = text => {
  switch (text) {
    case 'aboutme': return 'Sobre mí';
    case 'proyects': return 'Proyectos';
    case 'contact': return 'Contacto';
  }
};
