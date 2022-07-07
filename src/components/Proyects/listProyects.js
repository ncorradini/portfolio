import SOMOSMAS_BANNER from '../../assets/somosmas-banner.JPG';
import MENUAPP_BANNER from '../../assets/menuapp-banner.JPG';
import GYMWORKAPP_BANNER from '../../assets/gymworkapp-banner.JPG';
import CHALLENGE from '../../assets/estoes-challenge-banner.JPG';

export const proyects = [
  {
    id: 1,
    title: 'SOMOS MÁS - ONG',
    banner: SOMOSMAS_BANNER,
    techs: ['#ReactJS', '#HTML', '#CSS', '#Redux', '#Bootstrap'],
    code: 'https://github.com/alkemyTech/OT163-React-client',
    site: 'https://alkemy-tech-ong-somos-mas.vercel.app',
    inProgress: false,
  },
  {
    id: 2,
    title: 'MENÚAPP',
    banner: MENUAPP_BANNER,
    techs: ['#ReactJS', '#CSS', '#SASS', '#Context'],
    code: 'https://github.com/ncorradini/menuapp',
    site: 'https://menuapp-react.herokuapp.com/',
    inProgress: false,
  },
  {
    id: 3,
    title: 'GYMWORKAPP',
    banner: GYMWORKAPP_BANNER,
    techs: ['#ReactJS', '#SASS', '#Context', '#Node.js', '#Express', '#MongoDB'],
    code: 'https://github.com/ncorradini/gymworkapp',
    site: 'https://gymworkapp-v1.herokuapp.com/',
    inProgress: false,
  },
  {
    id: 4,
    title: 'CHALLENGE CRUD',
    banner: CHALLENGE,
    techs: ['#ReactJS', '#Material-UI', '#Redux'],
    code: 'https://github.com/ncorradini/estoes-challenge',
    site: 'https://challenge-v1.herokuapp.com/',
    inProgress: true,
  },
];
