

function changeImage()
{
    var img = document.getElementById("imglayer");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 

    fadeImg(img, 100, true);
    setTimeout("changeImage()", 1600);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 50;
        setTimeout(function(){fadeImg(el, val, fade);}, 15);
    }
}

var images = [],
x = 0;

images[0] = "images/TopStoriesSS.png";
images[1] = "images/WebViewSS.png";
images[2] = "images/CommentsSS.png";

changeImage();


// $(function(){
// 	// $('#bottomBrand').click(function(){
// 	// 	//window.scrollTo(0, 0);
// 	// 	$("html, body").animate({ scrollTop: 0 }, "slow");
//  //  		return false;
// 	// });
// });