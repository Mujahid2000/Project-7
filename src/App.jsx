import Home from './Components/Home/Home';

import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {

  return (
    <>
      <Home> </Home>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
