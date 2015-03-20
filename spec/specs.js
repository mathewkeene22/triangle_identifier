describe('triangles', function() {
  it("checks the three sides to see if it makes a closed shape", function() {
    expect(triangles(4, 4, 10)).to.equal("That is not a triangle, let alone a polygon.")
  });

  it("is an equilateral triangle if all three sides are equal", function() {
    expect(triangles(7, 7, 7)).to.equal("Equilateral Triangle")
  });

  it("is a scalene if all sides are different lenghts", function() {
    expect(triangles(7, 8, 9)).to.equal("Scalene Triangle")
  });

  it("is an isosceles triangle if two sides are equal lenghts", function() {
    expect(triangles(2, 2, 3)).to.equal("Isosceles Triangle")
  });
});
