// Sonidos de Devopoly. Los archivos están en public/audio/
// El estado "silenciado" se guarda en el navegador para que valga en toda la aplicación.

const CLAVE = "devopoly-silenciado";

export function estaSilenciado() {
  try {
    return localStorage.getItem(CLAVE) === "1";
  } catch {
    return false;
  }
}

export function guardarSilencio(silenciado) {
  try {
    localStorage.setItem(CLAVE, silenciado ? "1" : "0");
  } catch {
    // Sin almacenamiento disponible: el silencio vale solo para esta sección
  }
}

export function reproducir(archivo, volumen = 0.3) {
  if (estaSilenciado()) return;
  const audio = new Audio(`/audio/${archivo}`);
  audio.volume = volumen;
  audio.play().catch((error) => console.log("Audio bloqueado", error));
}
