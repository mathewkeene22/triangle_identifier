var triangles = function(one, two, three) {
  var triangle = "";

  if (( one + two < three ) || ( two + three < one ) || ( one + three < two )) {
    triangle = "That is not a triangle, let alone a polygon."
  }

  else if ((one === two) && (two === three) && (three === one)) {
    triangle =  "Equilateral Triangle"
  }

  return triangle;
};
