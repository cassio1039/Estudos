import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';

function App() {
  return (
    <>
      <Container>
          <section>
            <p>LOGO</p>
          </section>
      </Container>

      <Container>
        <section>
          <p>MENU</p>
        </section>
      </Container>

      <Container>
        <section>
          <p>FORMULÁRIO</p>
        </section>
      </Container>

      <Container>
        <section>
          <p>FOOTER</p>
        </section>
      </Container>
      

    </>
  );
}

export { App };
