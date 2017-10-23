$(document).ready(function(){
  $(".form-control").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myUL li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  $("#btn1").on("click", function(){
    var x = 200000;
    var y = .08;
    var z = x * y;
    $("#C1").text(x + z);
  });
});
$(document).ready(function(){
  $("#btn2").on("click", function(){
    var x = 109000;
    var y = .08;
    var z = x * y;
    $("#C2").text(x + z);
  });
});
$(document).ready(function(){
  $("#btn3").on("click", function(){
    var x = 18000;
    var y = .08;
    var z = x * y;
    $("#C3").text(x + z);
  });
});
$(document).ready(function(){
  $("#btn4").on("click", function(){
    var x = 143000;
    var y = .08;
    var z = x * y;
    $("#C4").text(x + z);
  });
});
$(document).ready(function(){
  $("#btn5").on("click", function(){
    var x = 500000;
    var y = .08;
    var z = x * y;
    $("#C5").text(x + z);
  });
});
