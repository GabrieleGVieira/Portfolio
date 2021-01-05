//fotos LK//

let time = 5000,
    currentImageIndex = 0;


LK = document.querySelectorAll("#slider img");
maxLK = LK.length;


CI = document.querySelectorAll("#slider01 img");
maxCI = CI.length;

function nextImage(x,y) {

    x[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= y)
        currentImageIndex = 0

    x[currentImageIndex]
        .classList.add("selected")
}

function start(x, y) {
    setInterval(() => {

        // troca de image
        nextImage(x, y)
    }, time)
}


start(CI,maxCI)
window.addEventListener("load", start)

start(LK, maxLK)
window.addEventListener("load", start(LK,maxLK))






