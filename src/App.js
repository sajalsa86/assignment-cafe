import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Toaster />
    </div>
  );
}

export default App;
