import dairyDarkSrc from '../assets/navicons/dairy-dark.png';
import dairySrc from '../assets/navicons/dairy.png';
import fishDarkSrc from '../assets/navicons/fish-dark.png';
import fishSrc from '../assets/navicons/fish.png';
import matzaDarkSrc from '../assets/navicons/matza-dark.png';
import matzaSrc from '../assets/navicons/matza.png';
import meatDarkSrc from '../assets/navicons/meat-dark.png';
import meatSrc from '../assets/navicons/meat.png';
import poultryDarkSrc from '../assets/navicons/poultry-dark.png';
import poultrySrc from '../assets/navicons/poultry.png';
import produceDarkSrc from '../assets/navicons/produce-dark.png';
import produceSrc from '../assets/navicons/produce.png';
import wineDarkSrc from '../assets/navicons/wine-dark.png';
import wineSrc from '../assets/navicons/wine.png';

interface Item {
  iconSrc: any;
  activeIconSrc: any;
  text: string;
  active: boolean;
}

const sidebarData: Item[] = [
  {
    iconSrc: dairyDarkSrc,
    activeIconSrc: dairySrc,
    text: 'Dairy',
    active: true,
  },
  {
    iconSrc: fishDarkSrc,
    activeIconSrc: fishSrc,
    text: 'Fish',
    active: false,
  },
  {
    iconSrc: matzaDarkSrc,
    activeIconSrc: matzaSrc,
    text: 'Matza',
    active: false,
  },
  {
    iconSrc: meatDarkSrc,
    activeIconSrc: meatSrc,
    text: 'Meat',
    active: false,
  },
  {
    iconSrc: poultryDarkSrc,
    activeIconSrc: poultrySrc,
    text: 'Poultry',
    active: false,
  },
  {
    iconSrc: produceDarkSrc,
    activeIconSrc: produceSrc,
    text: 'Produce',
    active: false,
  },
  {
    iconSrc: wineDarkSrc,
    activeIconSrc: wineSrc,
    text: 'Wine',
    active: false,
  },
];

export default sidebarData;
