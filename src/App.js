import { Buscador } from "./components/Buscador.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { UltimosPartidos } from "./components/UltimosPartidos.jsx";
import { BuscadorProvider } from "./context/BuscadorProvider.jsx";
import { UltimosPartidosProvider } from "./context/UltimosPartidosContext.jsx";

function App() {
  return (
    <>
      <Header />
      <BuscadorProvider>
        <UltimosPartidosProvider>
          <Buscador />
          <UltimosPartidos />
        </UltimosPartidosProvider>
      </BuscadorProvider>
      <Footer />
    </>
  );
}

export default App;
