// START of landing page
const logo = document.querySelectorAll('.logo path');

for (let i=0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
// END of Landing page//

// START of Scroll animation//

window.addEventListener("scroll", function() {
  let section1 = document.querySelector(".about");
  let section2 = document.querySelector(".projects");
  let section3 = document.querySelector(".contact");
  let position1 = section1.getBoundingClientRect().top;
  let position2 = section2.getBoundingClientRect().top;
  let position3 = section3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.5;
  
  if (position1 < screenPosition && section1.style.opacity !== "1") {
    section1.style.opacity = "1";
  } else if (position1 >= screenPosition && section1.style.opacity !== "0") {
    section1.style.opacity = "0";
  }
  
  if (position2 < screenPosition && section2.style.opacity !== "1") {
    section2.style.opacity = "1";
  } else if (position2 >= screenPosition && section2.style.opacity !== "0") {
    section2.style.opacity = "0";
  } 

  if (position3 < screenPosition && section3.style.opacity !== "1") {
    section3.style.opacity = "1";
  } else if (position3 >= screenPosition && section3.style.opacity !== "0") {
    section3.style.opacity = "0";
  } 
});

//END of Scroll Animation//

//Start of navbar selections

const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "100%" });
    gsap.to(".line", { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".links", { x: "0%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});













