let outTime = document.getElementById("realTime");
let currentTime = document.getElementById("rangeSlider");
outTime.innerHTML = currentTime.value;
let sliderTime = document.getElementById("rangeSlider").oninput = function() {
    outTime.innerHTML = this.value;
}
