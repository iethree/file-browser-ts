/* istanbul ignore file */
import { BrowserRouter as Router } from 'react-router-dom';
import { Theme } from 'react-daisyui';

import Routes from './Router';

import '@/css/App.css';

export default function App() {
  return (
    <Theme dataTheme='dark'>
      <Router>
        <Routes />
      </Router>
    </Theme>
  );
}
