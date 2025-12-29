$(document).ready(function () {
  $("#button").click(function () {
    $("div").animate({
      left: '250px',
    });
    function myf() {
      $("div").animate({ top: '200px', });
    }
    setTimeout(myf, 2500);
    setTimeout(function () {
      $("div").animate({
        left: '0px',
      });
    }, 4000);
    setTimeout(function () {
      $("div").animate({
        top: '0px',
      });
    }, 6000);
  });
});

$(document).ready(function () {
  $("#button2").click(function () {
    $("div").animate({
      left: '+=400px',
      transition: '5s'
    });
     $('div').css({
      background: 'yellow',
       transition: '5s',
       border: '1px solid black'
     })
  });
});
$(document).ready(function () {
  $("#button3").click(function () {
    $("div").animate({
      left: '-=400px',
    });
  });
});
$(document).ready(function () {
  $("#button4").click(function () {
    $("div").animate({
      top: '+=100px',
    });
  });
});
$(document).ready(function () {
  $("#button5").click(function () {
    $("div").animate({
      top: '-=100px',
    });
  });
});

$(document).ready(function () {
  $("#button6").click(function () {
    $("div").css(
      "transform", "rotate(1440deg)"
    );
    $("div").css(
      "transition", "5s"
    );
    $("div").css(
      "border-radius", "50%"
    );
    $("div").toggleClass('green');
    // function color1(){    
    //     $("div").toggleClass('yellow');
    // }
    // setInterval(color1,1500);

    // function color1(){    
    //     $("div").toggleClass('red');
    // }
    // setInterval(color1,1000);
  });
});
$(document).ready(function () {
  $("#button7").click(function () {
    $("div").css(
      "transform", "rotate(0deg)"
    );
    $("div").css(
      "transition", "5s"
    );
    $("div").css(
      "border-radius", "0"
    );
    $("div").css(
      "background-color", "#98bf21"
    );

  });
});
document.onkeydown = move;
function move(e) {
  var posLeft = document.getElementById('div').offsetLeft;
  var posTop = document.getElementById('div').offsetTop;
  e = e || window.event;
  if (e.keyCode == '38') {
    // top
    document.getElementById('div').style.top = (posTop - 58) + "px";
  }
  else if (e.keyCode == '40') {
    // bottom
    document.getElementById('div').style.top = (posTop + 58) + "px";
  }
  else if (e.keyCode == '37') {
    // left 
    document.getElementById('div').style.left = (posLeft - 58) + "px";
  }
  else if (e.keyCode == '39') {
    // right 
    document.getElementById('div').style.left = (posLeft + 58) + "px";
  }
}