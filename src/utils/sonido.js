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
  } catch {}
}

export function reproducir(archivo, volumen = 0.3) {
  if (estaSilenciado()) return;
  const audio = new Audio(`/audio/${archivo}`);
  audio.volume = volumen;
  audio.play().catch((error) => console.log("Audio bloqueado", error));
}
