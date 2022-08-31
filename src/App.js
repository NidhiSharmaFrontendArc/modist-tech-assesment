import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import * as ROUTES from './constants/routes';
import TextInput from './components/TextInput';
import IntegerInput from './components/IntegerInput';
import FloatInput from './components/FloatInput';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Link to={ROUTES.HOME}>
          <img className="logo"  src="https://cdn-me.themodist.com/media/logo/stores/8/the-modist-logo-440x40px.png"  alt="logo" />
        </Link>
        <Navigation />
        <Routes>
          <Route exact path={ROUTES.TEXT_INPUT} element={<TextInput />}  />
          <Route path={ROUTES.INTEGER_INPUT} element={<IntegerInput />}/>
          <Route path={ROUTES.FLOAT_INPUT} element={<FloatInput />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

