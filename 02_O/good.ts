abstract class CarPrice {
  abstract getPrice(): string;
}

class Tesla extends CarPrice {
  getPrice(): string {
    return '80 000';
  }
}

class Audi extends CarPrice {
  getPrice(): string {
    return '50 000';
  }
}

class Bmw extends CarPrice {
  getPrice(): string {
    return '70 000';
  }
}

const shop: Array<CarPrice> = [
  new Tesla(),
  new Audi(),
  new Bmw(),
];

const getPrice = (auto: Array<CarPrice>): string | void => {
  for (let i = 0; i < auto.length; i++) {
    auto[i].getPrice();
  }
}
