import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="orkwork-application">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
