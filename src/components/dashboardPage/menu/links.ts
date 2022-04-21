import { iconBus, iconClient, iconDashboard, iconDriver, iconTravels } from "../../../utils/imagesPath";

export interface LinksNav {
  label: string;
  href: string;
  icon: Icon;
  subLinks?: any[];
}

interface Icon {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const links: LinksNav[] = [
  {
    label: 'Dashboard',
    href: '',
    icon: {
      src: iconDashboard,
      alt: 'icone dashboard',
      width: 30,
      height: 30,
    },
  },
  {
    label: 'Clientes',
    href: 'clientes',
    icon: {
      src: iconClient,
      alt: 'icone cliente',
      width: 30,
      height: 30,
    },
    subLinks: [
      { title: 'Adicionar', link: 'adicionar'},
      { title: 'Detalhes', link: 'Detalhes'},

    ]
  },
  {
    label: 'Motoristas',
    href: 'motoristas',
    icon: {
      src: iconDriver,
      alt: 'icone motorista',
      width: 30,
      height: 30,
    },
    subLinks: [
      { title: 'Adicionar', link: 'adicionar'},
      { title: 'Detalhes', link: 'Detalhes'},
    ]
  },
  {
    label: 'Ônibus',
    href: 'onibus',
    icon: {
      src: iconBus,
      alt: 'icone ônibus',
      width: 30,
      height: 30,
    },
    subLinks: [
      { title: 'Adicionar', link: 'adicionar'},
    ]
  },
  {
    label: 'Viagens',
    href: 'viagens',
    icon: {
      src: iconTravels,
      alt: 'icone viagens',
      width: 30,
      height: 30,
    },
    subLinks: [
      { title: 'Adicionar', link: 'adicionar'},

    ]
  },
];
