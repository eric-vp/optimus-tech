import './App.css';
import Depoimentos from './patterns/Depoimentos';
import Footer from './patterns/Footer';
import Header from './patterns/Header';
import Metricas from './patterns/Metricas';
import SobreNos from './patterns/SobreNos';
import Vagas from './patterns/Vagas';

function App() {
  return (
    <>
      <Header />
      <SobreNos />
      <Metricas />
      <Vagas />
      <Depoimentos />
      <Footer />
    </>
  );
}

export default App;
