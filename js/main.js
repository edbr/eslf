var whichToShow = Math.floor(Math.random() * $(".quote").length);
$(".quote")
  .hide()
  .eq(whichToShow)
  .fadeIn(1000);

  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

    document.body.style.background = bgColor;
    }

random_bg_color();
