class Auto {
  constructor(public model: string) { }
  getCarModel() { }
}

const shop: Array<Auto> = [
  new Auto('Tesla'),
  new Auto('Audi'),
];

const getPrice = (auto: Array<Auto>): string | void => {
  for (let i = 0; i < auto.length; i++) {
    switch (auto[i].model) {
      case 'Tesla': return '80 000';
      case 'Audi': return '50 000';
      default: return 'No Auto Price';
    }
  }
}

getPrice(shop);
