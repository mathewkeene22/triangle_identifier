describe('triangles', function() {
  it("checks the three sides to see if it makes a closed shape", function() {
    expect(triangles(4, 4, 10)).to.equal("That is not a triangle, let alone a polygon.")
  });

  it("is an equilateral triangle if all three sides are equal", function() {
    expect(triangles(7, 7, 7)).to.equal("Equilateral Triangle")
  });
});
