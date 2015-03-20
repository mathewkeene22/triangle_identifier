var triangles = function(one, two, three) {

  if (( one + two < three ) || ( two + three < one ) || ( one + three < two )) {
    return "That is not a triangle, let alone a polygon."
  };
};
