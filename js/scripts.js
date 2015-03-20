var triangles = function(one, two, three) {
  var triangle = "";

  if ((one === two) && (two === three) && (three === one)) {
    triangle = "Equilateral Triangle"
  }

  else if ((one !== two) && (two !== three) && (three !== one)) {
    triangle = "Scalene Triangle"
  }

  else if ((one === two) || (two === three) || (one === three)) {
    triangle = "Isosceles Triangle"
  }

  if ((one + two < three) || (two + three < one) || (one + three < one)) {
    triangle = "That is not a triangle, let alone a polygon."
  }

  return triangle;
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var one = parseInt($("input#one").val());
    var two = parseInt($("input#two").val());
    var three = parseInt($("input#three").val());
    var result = triangles(one, two, three);

    $("#result").text(result);

    event.preventDefault();
  });
});
