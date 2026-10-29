import { createContext, useContext, useEffect, useState } from "react";
import { estaSilenciado, guardarSilencio } from "../utils/sonido.js";

// Un único estado de "silenciado" para toda la app. Se recuerda entre secciones y al recargar.
const SilencioContext = createContext({ silenciado: false, alternar: () => {} });

export function SilencioProvider({ children }) {
  const [silenciado, setSilenciado] = useState(estaSilenciado);

  useEffect(() => {
    guardarSilencio(silenciado);
  }, [silenciado]);

  const alternar = () => setSilenciado((valor) => !valor);

  return (
    <SilencioContext.Provider value={{ silenciado, alternar }}>
      {children}
    </SilencioContext.Provider>
  );
}

export function useSilencio() {
  return useContext(SilencioContext);
}
