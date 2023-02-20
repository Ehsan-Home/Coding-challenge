// Link: https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ

class Circle {
  constructor(r) {
    this.r = r;
  }

  getArea() {
    return this.r * this.r * Math.PI;
  }

  getPerimeter() {
    return 2 * this.r * Math.PI;
  }
}
