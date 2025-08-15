import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from "./components/Menu";
import { Contador } from './components/Contador';
import { DefaultInput } from './components/Input/Index';


function App() {
  return (
    <>
      <Container>
          <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <Contador/>
      </Container>
      
      <Container>
        <form className='form' action="">
          <div className='formRow'>
            <DefaultInput/>
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className='formRow'>
            <p>ciclos</p>
            <p>000000</p>
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export { App };
