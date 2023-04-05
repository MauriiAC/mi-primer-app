import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

export function App( { valorInicial } ) {

  console.log({valorInicial})

  const [contador, setContador] = useState(valorInicial)

  return (
    <div className='app-container'>
      <h1>Valor: <strong>{ contador }</strong></h1>
      <Button 
        aumentaContador={
          () => {
            setContador(contador + 1)
          }
        }
      />
    </div>
  );
}

// export default App;
