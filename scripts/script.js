
const button = document.querySelector("button");
button.addEventListener("click", getNewGeo);

function to_radians(degrees) {
    let pi = Math.PI;
    return degrees * (pi/180);
}

function to_degrees(radians) {
    let pi = Math.PI;
    return radians / (pi/180);
}

function getNewGeo() {
    let WB = 1199;
    let HT = 63.5;
    let AT = 10;
    let y = to_radians(180 - HT);
    let nWB = Math.sqrt(WB**2 + AT**2 - 2*WB*AT*Math.cos(y))
    let nHT = to_degrees(Math.acos((nWB**2 + AT**2 - WB**2)/(2*nWB*AT)))
}


