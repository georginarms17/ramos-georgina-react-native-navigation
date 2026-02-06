export interface Product {
  id: string;
  name: string;
  image: any;
  price: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Anua Azelaic Acid Serum',
    image: require('../../assets/anua-azelaic-acid-serum.jpg'),
    price: 990,
  },
  {
    id: 'p2',
    name: 'Anua Heart Leaf 77% Soothing Toner',
    image: require('../../assets/anua-heartleaf-77-soothing-toner.jpg'),
    price: 700,
  },
  {
    id: 'p3',
    name: 'BOJ Relief Sun Gel',
    image: require('../../assets/boj-relief-sun.jpg'),
    price: 650,
  },
  {
    id: 'p4',
    name: 'Celimax Noni Ampoule',
    image: require('../../assets/celimax-noni-ampoule.jpg'),
    price: 880,
  },
  {
    id: 'p5',
    name: 'Celimax Retinal Shot Tightening Booster',
    image: require('../../assets/celimax-retinal-shot.jpg'),
    price: 960,
  },
  {
    id: 'p6',
    name: 'Dr. Althea 345 Relief Cream',
    image: require('../../assets/dralthea-345-relief-cream.jpg'),
    price: 990,
  },
  {
    id: 'p7',
    name: 'ilso Super Melting Sebum Softener',
    image: require('../../assets/ilso-super-melting-sebum-softener.jpg'),
    price: 880,
  },
  {
    id: 'p8',
    name: 'mixsoon Centella Cleansing Water',
    image: require('../../assets/mixsoon-centella-cleansing-water.jpg'),
    price: 860,
  },
  {
    id: 'p9',
    name: 'Purito Mighty Bamboo Panthenol Cream',
    image: require('../../assets/purito-mighty-bamboo-panthenol-cream.jpg'),
    price: 760,
  },
  {
    id: 'p10',
    name: 'Round Lab Dokdo Toner',
    image: require('../../assets/round-lab-dokdo-toner.jpg'),
    price: 750,
  },
  {
    id: 'p11',
    name: 'Skin1004 Poremizing Quick Clay Stick Mask',
    image: require('../../assets/skin1004-poremizing-quick-clay-stick-mask.jpg'),
    price: 800,
  },
  {
    id: 'p12',
    name: 'Torriden DIVE IN Low Molecule Hyaluronic Acid Toner',
    image: require('../../assets/torriden-dive-in-hyaluronic-acid-serum.jpg'),
    price: 890,
  },
];