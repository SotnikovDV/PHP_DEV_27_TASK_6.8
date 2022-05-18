const trafficLight0 = document.querySelector('#trafficLight0');
const trafficLight1 = document.querySelector('#trafficLight1');
const trafficLight2 = document.querySelector('#trafficLight2');
let currentColor = 0;

function switchLight(event){
    trafficLight0.style.background = ('black');
    trafficLight1.style.background = ('black');
    trafficLight2.style.background = ('black');

    switch (currentColor) {
        case 0: trafficLight0.style.background = ('green'); break;
        case 1: trafficLight1.style.background = ('yellow'); break;
        case 2: trafficLight2.style.background = ('red'); break;
    }

    currentColor = currentColor + 1;
    if (currentColor > 2) {
        currentColor = 0;
    }
}

trafficLight0.addEventListener('click', switchLight);
trafficLight1.addEventListener('click', switchLight);
trafficLight2.addEventListener('click', switchLight);