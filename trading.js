
// var slides = document.getElementsByClassName("sliderBg");

// function hanldeSlide(){
//     // console.log(slides[0].classList.contains('active'));
//     // console.log(slides[0].classList.contains);
//     if(slides[0].classList.contains("active")){
//         // console.log("true");
//         slides[0].classList.remove("active");
//         slides[1].classList.add("active");
//     }
//    else if(slides[1].classList.contains("active")){
//         // console.log("true");
//         slides[1].classList.remove("active");
//         slides[0].classList.add("active");
//     }
// }


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}