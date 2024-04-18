const images = document.querySelectorAll(".image");
const movingBoxOne = document.querySelectorAll(".imageFlex");
const movingBoxTwo = document.querySelectorAll(".imageFlex2");
let windowPositionY;
let windowActualHeight = window.innerHeight;
let windowActualWidth = window.innerWidth;
let links = "images/street-style-hombre-paris-primavera-verano-2022-1624620518.jpg";

    images[3].style.background=`url("${links}")`

let movingImages = () =>{
windowPositionY = window.scrollY;
if(windowActualHeight>1266){
    for(let i=0;i<movingBoxOne.length; i++){
        movingBoxOne[i].style.transform=`rotateZ(45deg) translateX(${windowPositionY * .5}px)`;
        movingBoxTwo[i].style.transform=`rotateZ(45deg) translateX(${-windowPositionY* .5}px)`;
    }
}
else if(windowActualWidth<1101){
    for(let i=0;i<movingBoxOne.length; i++){
        movingBoxOne[i].style.transform=`rotateZ(65deg) translateX(${windowPositionY * .5}px)`;
        movingBoxTwo[i].style.transform=`rotateZ(65deg) translateX(${-windowPositionY* .5}px)`;
    }
}

else{
    for(let i=0;i<movingBoxOne.length; i++){
        movingBoxOne[i].style.transform=`rotateZ(45deg) translateX(${windowPositionY * .5}px)`;
        movingBoxTwo[i].style.transform=`rotateZ(45deg) translateX(${-windowPositionY* .5}px)`;
    }
}

}

window.addEventListener("scroll",movingImages);
