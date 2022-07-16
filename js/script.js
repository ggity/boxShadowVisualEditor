// ui kontrole cuvamo u promjenjive
// ui kontrole za sjenku
var shadowX = document.getElementById('shadow-x');
var shadowY = document.getElementById('shadow-y');
var shadowBlur = document.getElementById('shadow-blur');
var shadowSpread = document.getElementById('shadow-spread');
var shadowColor = document.getElementById('shadow-color');

var shadowBlurNumber = document.getElementById('blur-value');
var shadowSpreadNumber = document.getElementById('spread-value');

// ui kontrole za oblik
var shape = document.getElementById('shape');
var shapeColor = document.getElementById('shape-color');
var shapeShape = document.getElementById('shape-shape');

// ui kontrole za pozadinu
var backgroundColor = document.getElementById('background-color');

// 
// funkcije koje setuju parametre
// 
// funkcije koje podesavaju sjenku oblika
function setShadowX(shadowX) {
    document.body.style.setProperty("--sjenka-x", shadowX);
}

function setShadowY(shadowY) {
    document.body.style.setProperty("--sjenka-y", shadowY);
}

function setShadowBlur(shadowBlur) {
    document.body.style.setProperty("--sjenka-blur", shadowBlur);
}

function setShadowSpread(shadowSpread) {
    document.body.style.setProperty("--sjenka-spread", shadowSpread);
}

function setShadowColor(shadowColor) {
    document.body.style.setProperty("--sjenka-boja", shadowColor);
}

// 
// funkcije koje podesavaju oblik
function setShapeColor(shapeColor) {
    document.body.style.setProperty("--boja-oblika", shapeColor);
}

function setElementShape(elementShape) {
    if (elementShape === true) {
        shape.classList.add("shape-circle");
    } else {
        shape.classList.remove("shape-circle");
    }
}

// 
// funkcije koje podesavaju pozadinu
function setBackgroundColor(backgroundColor) {
    document.body.style.setProperty("--boja-pozadine", backgroundColor);
}

// dodavanje event listenera za ui kontrole tako da se svaki put kada korisnik promjeni unos sve odma azurira
// 
// dodavanje event listenera za ui kontrole sjenke oblika
shadowX.addEventListener('input', (e) => {
    setShadowX(shadowX.value + "px");
});

shadowY.addEventListener('input', (e) => {
    setShadowY(shadowY.value + "px");
});

shadowColor.addEventListener('input', (e) => {
    setShadowColor(shadowColor.value);
});

shadowBlur.addEventListener('input', (e) => {
    setShadowBlur(shadowBlur.value + "px");
    shadowBlurNumber.innerHTML = shadowBlur.value;

});

shadowSpread.addEventListener('input', (e) => {
    setShadowSpread(shadowSpread.value + "px");
    shadowSpreadNumber.innerHTML = shadowSpread.value;
});

// 
// dodavanje event listenera za ui kontrole oblika
shapeColor.addEventListener('input', (e) => {
    setShapeColor(shapeColor.value);
});

shapeShape.addEventListener('input', (e) => {
    setElementShape(shapeShape.checked);
});

// 
// dodavanje event listenera za ui kontrole pozadinske boje
backgroundColor.addEventListener('input', (e) => {
    setBackgroundColor(backgroundColor.value);
});