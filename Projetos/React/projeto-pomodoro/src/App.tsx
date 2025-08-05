import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Heading>Olá mundo !<button><TimerIcon/></button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, fugit
        dignissimos numquam sequi asperiores, ipsam, tempore minus laboriosam
        perspiciatis sit aliquid inventore ducimus nemo beatae eligendi sed
        itaque dolor deleniti.
      </p>
    </>
  );
}

export { App };
