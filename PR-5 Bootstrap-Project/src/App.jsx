import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Benner from './Componet/Benner';
import Header from './Componet/Header';
import Denim from './Componet/Denim';
import Filter from './Componet/Filter';
import Footer from './Componet/Footer';
import Shope from './Componet/Shope';
import Blog from './Componet/Blog';
function App() {
  return (
    <div>
      <Header />
      <Benner />
      <Denim />
      <Filter />
      <Shope />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
