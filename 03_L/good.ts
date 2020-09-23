interface Figure {
  setWidth(width: number): void;
  setHeight(width: number): void;
  areaOf(): void;
}

class Rectangle implements Figure {
  setWidth(width: number) { }
  setHeight(width: number) { }
  areaOf() { }
}

class Square implements Figure {
  setWidth(width: number) { }
  setHeight(width: number) { }
  areaOf() { }
}
