//making responsive img
function checkMediaQuery() {
    if (window.innerWidth > 1023) {
        document.querySelector('.img1').src = "img/codeimg1.png";
        document.querySelector('.img2').src = "img/codeimg2.png";
        document.querySelector('.img3').src = "img/codeimg3.png";  
    }else if(700 > window.innerWidth){
        document.querySelector('.img1').src = "img/c1.png";
        document.querySelector('.img2').src = "img/c2.png";
        document.querySelector('.img3').src = "img/c3.png";
    }else{
        document.querySelector('.img1').src = "img/code1.png";
        document.querySelector('.img2').src = "img/code2.png";
        document.querySelector('.img3').src = "img/code3.png";
    }
}

window.addEventListener('resize', checkMediaQuery);