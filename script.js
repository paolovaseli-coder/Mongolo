const foto = document.getElementById("foto");
const contador = document.getElementById("contador");
const barra = document.getElementById("barraVida");
const ko = document.getElementById("ko");
const onomatopeyaTxt = document.getElementById("onomatopeyaTxt");

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

  // === CÁLCULO DE POSICIÓN ALEATORIA ===
  const palabraAleatoria = onomatopeyas[Math.floor(Math.random() * onomatopeyas.length)];
  onomatopeyaTxt.textContent = palabraAleatoria;
  
  // Genera posiciones aleatorias en porcentaje dentro del contenedor de la foto
  const posX = Math.floor(Math.random() * 60) + 20; // Entre 20% y 80%
  const posY = Math.floor(Math.random() * 60) + 20; // Entre 20% y 80%
  
  onomatopeyaTxt.style.left = posX + "%";
  onomatopeyaTxt.style.top = posY + "%";
  onomatopeyaTxt.style.display = "block";

  // Ocultar la palabra rápido para el siguiente golpe
  setTimeout(() => {
    if (onomatopeyaTxt.textContent === palabraAleatoria) {
      onomatopeyaTxt.style.display = "none";
    }
  }, 350);

  // Sonido
  const sonidoAleatorio = sonidos[Math.floor(Math.random() * sonidos.length)];
  if (sonidoAleatorio) {
    sonidoAleatorio.currentTime = 0;
    sonidoAleatorio.play().catch(e => console.log("Audio esperando interacción."));
  }

  if (vida === 0) {
    ko.style.display = "block";
    onomatopeyaTxt.style.display = "none";
    foto.style.filter = "grayscale(100%)";
    foto.style.cursor = "not-allowed";
  }
});
