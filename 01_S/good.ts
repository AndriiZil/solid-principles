class Auto {
  constructor(model: string) { }
  getCarModel() { }
  setCarModel() { }
}

class CustomerAuto {
  saveCustomerOrder(o: Auto) { }
  getCustomerOrder(id: string) { }
  removeCustomerOrder(id: string) { }
}

class AutoDB {
  updateCarSet(set: object) { }
}
