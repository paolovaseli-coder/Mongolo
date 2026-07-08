const foto = document.getElementById("foto");
const contador = document.getElementById("contador");
const barra = document.getElementById("barraVida");
const ko = document.getElementById("ko");
// Seleccionamos el nuevo elemento del HTML
const onomatopeyaTxt = document.getElementById("onomatopeyaTxt");

const sonidos = [
  document.getElementById("golpe1"),
  document.getElementById("golpe2"),
  document.getElementById("golpe3"),
  document.getElementById("golpe4")
];

const onomatopeyas = [
  "💥 PERCO!",
  "¼ PERCA!",
  "👊 MANDATUM!",
  "💣 GOLA!",
  "⚡ PILI!",
  "🔥 DIOLO!",
  "💥 VANAGLORIA!",
  "🥊 VENTO!",
  "¼ MINERVA!",
  "💥 IKER!"
];

let golpes = 0;
let vida = 100;

foto.addEventListener("click", () => {
  if (vida <= 0) return;

  golpes++;
  vida -= 5;
  if (vida < 0) vida = 0;

  contador.textContent = `Golpes: ${golpes}`;
  barra.style.width = `${vida}%`;

  // === LÓGICA DE LAS ONOMATOPEYAS ===
  // 1. Elegir una al azar
  const palabraAleatoria = onomatopeyas[Math.floor(Math.random() * onomatopeyas.length)];
  onomatopeyaTxt.textContent = palabraAleatoria;
  onomatopeyaTxt.style.display = "block";

  // 2. Hacer que desaparezca un instante después para el próximo golpe
  setTimeout(() => {
    if (onomatopeyaTxt.textContent === palabraAleatoria) {
      onomatopeyaTxt.style.display = "none";
    }
  }, 400);

  // Reproducir sonido
  const sonidoAleatorio = sonidos[Math.floor(Math.random() * sonidos.length)];
  if (sonidoAleatorio) {
    sonidoAleatorio.currentTime = 0;
    sonidoAleatorio.play().catch(e => console.log("Audio esperando interacción."));
  }

  if (vida === 0) {
    ko.style.display = "block";
    onomatopeyaTxt.style.display = "none"; // Ocultar al llegar al K.O.
    foto.style.filter = "grayscale(100%)";
    foto.style.cursor = "not-allowed";
  }
});
