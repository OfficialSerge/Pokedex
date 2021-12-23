import './App.css';
import { useState } from 'react';
import { Display } from './components/Display';
import { ImageGrid } from './components/ImageGrid';

function App() {
const [selectPok, setSelectPok] = useState(null)

  return (
    <div className='App'>
      <ImageGrid setSelectPok={setSelectPok}></ImageGrid>
      <Display selectPok={selectPok}></Display>
    </div>
  )
}

export default App; 
