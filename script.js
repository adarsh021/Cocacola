// Selecting elements
const box = document.querySelector("#box");
const menu = document.querySelector(".menu");

// Event listener for clicking on the box icon
box.addEventListener("click", function() {
  // Toggle the menu visibility
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// Animation timeline using GSAP
const tl = gsap.timeline();
tl.from("#nleft ", {
  x: -70,
  
  duration:1,
  delay: 0.6,
  opacity: 0
  
});
tl.from("#top h1",{
  x:-70,
  duration:1.5,
  opacity:0,
})
tl.from("#bleft h1",{
  x:-70,
  duration:0.6,
  opacity:0,
  stagger:0.6,
})
tl.from("#bleft button",{
  x:-70,
  duration:0.6,
  opacity:0,
  stagger:0.6,
})
tl.from("#bright video",{
  x:-70,
  duration:0.6,
  opacity:0,
  stagger:0.6,
  delay:0.6,
})

