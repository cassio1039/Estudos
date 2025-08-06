import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from "./components/Menu";
import { Contador } from './components/Contador';


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
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}

export { App };
