/* write a java script code to display taffic lights that should be automatically change light after waiting for 2 seconds with out using animations*/

document.addEventListener("DOMContentLoaded", function () {
    const lights = ["red", "yellow", "green"];
    let index = 0;

    function changeLight() {
        document.querySelectorAll(".light").forEach(light => {
            light.style.backgroundColor = "black";
        });
        document.getElementById(lights[index]).style.backgroundColor = lights[index];
        index = (index + 1) % lights.length;
    }

    setInterval(changeLight, 2000);
    changeLight();
});