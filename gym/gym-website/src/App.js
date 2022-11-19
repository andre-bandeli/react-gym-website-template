
import './App.css';
import Atividades from './components/atividades/Atividades';
import Treinos from './components/atividades/Treinos';
import BotaoDown from './components/botao-down/BotaoDown';
import Code from './components/code/Code';
import Contato from './components/contato/Contato';
import Copyright from './components/copyright/Copyright';
import Folder from './components/folder/Folder';
import Footer from './components/footer/Footer';
import Icones from './components/icones/Icones';
import Navbar from './components/Nav/Navbar';
import Planos from './components/planos/Planos';
import Slider from './components/header/Header';
import Testimunials from './components/testemonials/Testimunials';
import Time from './components/time/Time';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <Icones/>
      <Atividades/>
      <Folder/>
      <Treinos/>
      <Code/>
      <Planos/>
      <BotaoDown/>
      <Time/>
      <Contato/>
      <Testimunials/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
