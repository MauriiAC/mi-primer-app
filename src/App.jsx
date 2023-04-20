import './App.css';
import { ToggleButton } from './components/Button';
import { TitleContador } from './components/TitleContador';
import { Contenedor } from './components/Contenedor';
import { useCounter } from './hooks/useCounter';

export function App( { valorInicial } ) {

  const { contador, aumentaContador, decrementaContador, restableceContador } = useCounter(valorInicial)

  return (
    <Contenedor tituloApp = {"Mi primera App en React!"}>
      <TitleContador contador={contador}/>
      <div className='botones-contador'>
        <ToggleButton
          cambiaContador={() => aumentaContador(5)}
          text={"+5"}
        />
        <ToggleButton
          cambiaContador={restableceContador}
          text={"Restablecer"}
        />
        <ToggleButton
          cambiaContador={() => decrementaContador(5)}
          text={"-5"}
        />
      </div>
    </Contenedor>
  );
}
