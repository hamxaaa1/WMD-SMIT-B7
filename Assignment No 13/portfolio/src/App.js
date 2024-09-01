import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
   <>
   <div className='navDiv'>
   <Navbar />
   <Header />
   </div>
   <Services />
   <Contact />
   <Footer />
   </>
  );
}

export default App;
