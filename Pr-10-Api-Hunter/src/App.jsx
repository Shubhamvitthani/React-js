// src/App.jsx
import AxiosProducts from './components/AxiosProducts';
import FetchProducts from './components/FetchProducts';

const App = () => {
  return (
    <div className="bg-light min-vh-100">
      <div className="py-4 text-center bg-primary text-white">
        <h2>🛍️ Redux Thunk API Call</h2>
      </div>
      <FetchProducts />     {/* using fetch() */}
      <AxiosProducts />     {/* using axios */}
    </div>
  );
};

export default App;
