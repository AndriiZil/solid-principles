class Rectangle {

  constructor(public width: number, public height: number) { }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  areaOf(): number {
    return this.width * this.height;
  }

}

class Square extends Rectangle {
  width: number = 0;
  height: number = 0;

  constructor(size: number) {
    super(size, size);
  }

  setWidth(width: number) {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number) {
    this.width = height;
    this.height = height;
  }

}

// How it should works
const changeShapeSize = (figure: Rectangle): void => {
  figure.setWidth(10);
  figure.setHeight(20);
}

// How it works
const changeShapeSize2 = (figure: Rectangle): void => {
  figure.setWidth(10);
  figure.setHeight(20);
}
