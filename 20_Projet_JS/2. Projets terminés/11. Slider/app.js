const slides = [...document.querySelectorAll(".slide")]

const sliderData = {
  locked: false,
  direction: 0,
  slideOutIndex: 0,
  slideInIndex: 0
}

const directionButtons = [...document.querySelectorAll(".direction-btn")];

directionButtons.forEach(btn => btn.addEventListener("click", handleClick))

function handleClick(e) {
  if(sliderData.locked) return;
  sliderData.locked = true;

  getDirection(e.target)

  slideOut();
}

function getDirection(btn){

  sliderData.direction = btn.className.includes("right") ? 1 : -1

  sliderData.slideOutIndex = slides.findIndex(slide => slide.classList.contains("active"))

  if(sliderData.slideOutIndex + sliderData.direction > slides.length - 1) {
    sliderData.slideInIndex = 0;
  }
  else if (sliderData.slideOutIndex + sliderData.direction < 0) {
    sliderData.slideInIndex = slides.length - 1;
  }
  else {
    sliderData.slideInIndex = sliderData.slideOutIndex + sliderData.direction;
  }
}

function slideOut(){
  slideAnimation({
    el: slides[sliderData.slideInIndex],
    props: {
      display: "flex",
      transform: `translateX(${sliderData.direction < 0 ? "100%" : "-100%"})`,
      opacity: 0
    }
  })
  
  slides[sliderData.slideOutIndex].addEventListener("transitionend", slideIn)

  slideAnimation({
    el: slides[sliderData.slideOutIndex],
    props: {
      transition: "transform 0.4s cubic-bezier(0.74, -0.34, 1, 1.19), opacity 0.4s ease-out",
      transform: `translateX(${sliderData.direction < 0 ? "-100%" : "100%"})`,
      opacity: 0,
    }
  })

}

function slideAnimation(animationObject){
  for(const prop in animationObject.props){
    animationObject.el.style[prop] = animationObject.props[prop]
  }
}

function slideIn(e) {
  slideAnimation({
    el: slides[sliderData.slideInIndex],
    props: {
      transition: "transform 0.4s ease-out, opacity 0.6s ease-out",
      transform: "translateX(0%)",
      opacity: 1,
    }
  })
  slides[sliderData.slideInIndex].classList.add("active");
  
  
  slides[sliderData.slideOutIndex].classList.remove("active");
  e.target.removeEventListener("transitionend", slideIn)
  slides[sliderData.slideOutIndex].style.display = "none";

  setTimeout(() => {
    sliderData.locked = false;
  }, 400)
}