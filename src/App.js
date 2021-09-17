import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Navigation />

      <Main />

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
