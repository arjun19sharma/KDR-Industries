// simple duplicate slider content for infinite scroll
const slider = document.querySelector(".testimonial-slider");

if(slider){
slider.innerHTML += slider.innerHTML;
}

