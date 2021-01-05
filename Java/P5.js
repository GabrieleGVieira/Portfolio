//fotos LK//

let time = 5000,
    currentImageIndex = 0;
    atv = document.querySelectorAll("#sliderAtv img");
     maxatv= atv.length;

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

fml = document.querySelectorAll("#slider img");
maxfml = fml.length;

hobs = document.querySelectorAll("#sliderHob img");
maxhobs = hobs.length;

atv = document.querySelectorAll("#sliderAtv img");
maxatv= atv.length;


start(fml, maxfml)
window.addEventListener("loadfml", start(fml,maxfml))

start(hobs, maxhobs)
window.addEventListener("loadhobs", start(hobs,maxhobs))

start(atv, maxatv)
window.addEventListener("loadatv", start(atv,maxatv))
