const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i){

slides.forEach(slide=>{
slide.classList.remove("active");
});

dots.forEach(dot=>{
dot.classList.remove("active");
});

slides[i].classList.add("active");
dots[i].classList.add("active");

index = i;

}

// AUTO SLIDE
function autoSlide(){

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

}

setInterval(autoSlide,3000);

// CLICK DOT
dots.forEach((dot,i)=>{
dot.addEventListener("click",()=>{
showSlide(i);
});
});