import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

function App() {
  console.log('oi');
  return (
    <>
      <Heading/>
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
