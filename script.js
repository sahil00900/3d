Shery.mouseFollower({
  skew:true,
  
});

const button = document.querySelector("#btnlast");
const video = document.querySelector(".video1");
button.addEventListener("mousemove", function(e) {
  video.style.filter = "greyscale(0%)";
  video.play();
});
button.addEventListener("mouseleave", function(e) {
  video.style.filter = "greyscale(100%)";
  video.pause();
});


Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./0.mp4","./2.mp4","./3.mp4"]});
function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});


let sections =  document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images",{
    style:5,
    slideStyle: (setScroll)=>{
      sections.forEach(function(section, index){
        ScrollTrigger.create({
          trigger:section,
          start: "top top",
          scrub:1,
          onUpdate: function(prog){
            setScroll(prog.progress + index)
          }

        })
      })
    }
 });




locoInitialize();