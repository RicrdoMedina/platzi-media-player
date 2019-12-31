enum Color {
  rojo = "rojo",
  verde = "verde"
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.rojo
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log("area rectangulo", areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
