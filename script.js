// Select all slides
const slides = document.querySelectorAll(".slide");
console.log(slides);
// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
    slide.style.transform = "translateX(" + indx * 100 + "%)";
    console.log(slide.style)
});

//curr slide counter
let curSlide = 0;
// max number of slide 
let maxSlide = slides.length - 1;


// select next slide button
const nextSlide = document.querySelector(".btn-next");

// add eventListener and next slide functionality 
nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }


    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = "translateX(" + (indx - curSlide) * 100 + "%)";
    });
});


// select previous slide button
const prevSlide = document.querySelector(".btn-prev");

// add eventListener and next slide functionality 
prevSlide.addEventListener("click", function () {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }


    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = "translateX(" + (indx - curSlide) * 100 + "%)";
    });
});

