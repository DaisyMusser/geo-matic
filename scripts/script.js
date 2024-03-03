
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
    let WB = document.getElementById("WB").value;
    let HT = document.getElementById("HT").value;
    let AT = document.getElementById("AT").value;
    let y = to_radians(180 - HT);
    const nWB = Math.round(Math.sqrt(WB**2 + AT**2 - 2*WB*AT*Math.cos(y)))
    const nHT = Math.round(to_degrees(Math.acos((nWB**2 + AT*10*2 - WB**2)/(2*nWB*AT))))
    let results = document.getElementById("results-box");
    const result_text = "<p>New Wheelbase: " + nWB + "</p><p>New Head Tube Angle: " + nHT + "</p>";
    results.innerHTML = result_text;
    results.style.display = "block";
}



