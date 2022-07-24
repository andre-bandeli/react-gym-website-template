
import './App.css';
import Atividades from './components/atividades/Atividades';
import Treinos from './components/atividades/Treinos';
import BotaoDown from './components/botao-down/BotaoDown';
import Contato from './components/contato/Contato';
import Folder from './components/folder/Folder';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Planos from './components/planos/Planos';
import Slider from './components/slider/Slider';
import Time from './components/time/Time';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <BotaoDown/>
      <Atividades/>
      <Folder/>
      <Treinos/>
      <BotaoDown/>
      <Planos/>
      <BotaoDown/>
      <Time/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
