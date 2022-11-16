function intersezione(a1, b1, c1, a2, b2, c2, a3, b3, c3) {
  var x = (b2 * c3 - b3 * c2) / (a2 * b3 - a3 * b2);
  var y = (a3 * c2 - a2 * c3) / (a2 * b3 - a3 * b2);
  var z = (a2 * b3 - a3 * b2) / (a2 * b3 - a3 * b2);
  return [x, y, z];
}
