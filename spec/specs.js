describe('triangles', function() {
  it("checks the three sides to see if it makes a closed shape", function() {
    expect(triangles(4, 4, 10)).to.equal("That is not a triangle, let alone a polygon.")
  });

});
