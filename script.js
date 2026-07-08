const foto = document.getElementById("foto");
const contador = document.getElementById("contador");
const barra = document.getElementById("barraVida");
const ko = document.getElementById("ko");

const sonidos = [
  document.getElementById("golpe1"),
  document.getElementById("golpe2"),
  document.getElementById("golpe3"),
  document.getElementById("golpe4")
];

const onomatopeyas = [
  "💥 PERCO!",
  "💢 PERCA!",
  "👊 MANDATUM!",
  "💣 GOLA!",
  "⚡ PILI!",
  "🔥 DIOLO!",
  "💥 VANAGLORIA!",
  "🥊 VENTO!",
  "💢 MINERVA!",
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

  const sonidoAleatorio = sonidos[Math.floor(Math.random() * sonidos.length)];
  if (sonidoAleatorio) {
    sonidoAleatorio.currentTime = 0;
    sonidoAleatorio.play().catch(e => console.log("Audio esperando interacción."));
  }

  if (vida === 0) {
    ko.style.display = "block";
    foto.style.filter = "grayscale(100%)";
    foto.style.cursor = "not-allowed";
  }
});
