const reconex = document.getElementById("reconex")
const trust = document.getElementById("trust")
const motion = document.getElementById("motion")
const warner = document.getElementById("warner")
const btn = document.getElementById("btn")

/** Comportamiento Experiencia Laboral, links y recolor */
function urlRec() {
    window.open("https://reconex.io/");
};
function urlTru() {
    window.open("https://www.linkedin.com/company/trust-digital/about/");
};
function urlMot() {
    window.open("https://dead-cells.com/");
};
function urlWar() {
    window.open("https://www.hogwartslegacy.com/es-es");
};

function resalt1() {
    reconex.style.cssText = 'color: rgba(206, 36, 36, 0.753)';
    reconex.style.cursor = 'pointer';
    reconex.style.textDecorationLine = 'underline'
}
function resalt2() {
    trust.style.cssText = 'color: rgba(206, 36, 36, 0.753)';
    trust.style.cursor = 'pointer';
    trust.style.textDecorationLine = 'underline'
}
function resalt3() {
    motion.style.cssText = 'color: rgba(206, 36, 36, 0.753)';
    motion.style.cursor = 'pointer';
    motion.style.textDecorationLine = 'underline'
}
function resalt4() {
    warner.style.cssText = 'color: rgba(206, 36, 36, 0.753)';
    warner.style.cursor = 'pointer';
    warner.style.textDecorationLine = 'underline'
}
function normal1() {
    reconex.style.textDecorationLine = 'none';
    reconex.style.cssText = "currentcolor"
}
function normal2() {
    trust.style.textDecorationLine = 'none';
    trust.style.cssText = "currentcolor"
}
function normal3() {
    motion.style.textDecorationLine = 'none';
    motion.style.cssText = "currentcolor"
}
function normal4() {
    warner.style.textDecorationLine = 'none';
    warner.style.cssText = "currentcolor"
}
/** Comportamiento Boton Contactame */
function redCont() {
    window.location.href ="contacto.html"
}
function resalt5() {
    btn.style.backgroundColor = "rgba(206, 36, 36, 0.753)";
}
function normal5() {
   btn.style.backgroundColor = "rgba(3, 3, 3, 0.753)";
}