require("./lib/social"); //Do not delete

["healthcare","environment","immigration","education","guncontrol","transportation","labor","energy"].forEach(function(section){
  // set up clicking to update map interactive on mobile
  document.getElementById("button"+section).addEventListener("click", function() {
    var sectionElements = document.getElementsByClassName("section-emma");
    var buttonElements = document.getElementsByClassName("button");
    for(var i = 0; i < sectionElements.length; i++){
      sectionElements[i].className = "section-emma";
      buttonElements[i].className = "button";
    };
    document.getElementById("section"+section).className += " selected";
    document.getElementById("button"+section).className += " selected";
  });
});

// WHAT I ACTUALLY ENDED UP USING ON WCM

// document.getElementById("scroll").addEventListener("click", function() {
//     $('html, body').animate({
//         scrollTop: $("#scroll-to-top").offset().top
//     }, 600);
// });

// function animate(elem, style, unit, from, to, time, prop) {
//     if (!elem) {
//         return;
//     }
//     var start = new Date().getTime(),
//         timer = setInterval(function () {
//             var step = Math.min(1, (new Date().getTime() - start) / time);
//             if (prop) {
//                 elem[style] = (from + step * (to - from))+unit;
//             } else {
//                 elem.style[style] = (from + step * (to - from))+unit;
//             }
//             if (step === 1) {
//                 clearInterval(timer);
//             }
//         }, 25);
//     if (prop) {
//           elem[style] = from+unit;
//     } else {
//           elem.style[style] = from+unit;
//     }
// }
//
// document.getElementById("scroll").addEventListener("click", function() {
//     var target = document.getElementById("scroll");
//     var top = document.getElementById("scroll-to-top");
//     animate(document.scrollingElement || document.documentElement, "scrollTop", "", target.offsetTop, top.offsetTop, 500, true);
// });
