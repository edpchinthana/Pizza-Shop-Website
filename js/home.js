var slides = new Array();
var index = 0;
function creatingSlides() {
    console.log('creating slides');
    let slideImages = ['slide2.jpg','slide2.jpg','slide3.jpg'];


    for(let x=0;x<slideImages.length;x++){
        let slide = document.createElement('img');
        slide.src = "./res/images/"+slideImages[x];
        slide.classList.add('slide');
        slides.push(slide);
    }
    
}

function showSlide(e){
    slide
}


creatingSlides()