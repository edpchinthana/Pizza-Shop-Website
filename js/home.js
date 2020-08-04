var slides = new Array();
var index = 1;
function creatingSlides() {
    console.log('creating slides');
    let slideImages = ['slide2.jpg','slide3.jpg','slide2.jpg'];


    for(let x=0;x<slideImages.length;x++){
        let slide = document.createElement('img');
        slide.src = "./res/images/"+slideImages[x];
        slide.classList.add('slide');
        slides.push(slide);
        document.getElementById("slider").appendChild(slide);
    }
    document.getElementById("slider").style.left = "-100vw"
}

function showSlide(e){

    if(e==1){
        if(index==slides.length-1){
            document.getElementById("slider").style.left = "0vw"
            index=0;
        }else{
            document.getElementById("slider").style.left = ((index+1)*(-100))+'vw'
            index++;
        }
    }else{
        if(index==0){
            document.getElementById("slider").style.left = ((index+slides.length-1)*(-100))+'vw'
            index=slides.length-1;
        }else{
            document.getElementById("slider").style.left = ((index-1)*(-100))+'vw'
            index--;
        }
    }
}

creatingSlides();

