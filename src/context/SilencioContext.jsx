import { createContext, useContext, useEffect, useState } from "react";
import { estaSilenciado, guardarSilencio } from "../utils/sonido.js";

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
