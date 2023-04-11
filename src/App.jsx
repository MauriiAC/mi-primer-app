import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { TitleContador } from './components/TitleContador';
import { Contenedor } from './components/Contenedor';

export function App( { valorInicial } ) {

  const [contador, setContador] = useState(valorInicial)
  
  // let contador = valorInicial;
  
  // const setContador = (value) => {
  //   contador = value
  // }
    
  const aumentaContador = (n) => {
    setContador(contador + n)
  }

  const decrementaContador = (n) => {
    setContador(contador - n)
  }

  const restableceContador = () => {
    setContador(valorInicial)
  }

  return (
    <Contenedor tituloApp = {"Mi primera App en React!"}>
      <TitleContador contador={contador}/>
      <div className='botones-contador'>
        <Button
          cambiaContador={() => aumentaContador(5)}
          text={"+5"}
        />
        <Button
          cambiaContador={restableceContador}
          text={"Restablecer"}
        />
        <Button
          cambiaContador={() => decrementaContador(5)}
          text={"-5"}
        />
      </div>
    </Contenedor>
  );
}

// export default App;
