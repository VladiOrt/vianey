import './index.scss';
import ReactAudioPlayer from 'react-audio-player';
const Audio = require('./assets/img/music.mp3')


function App() {
  return (
    <div className="App">
      <div className='containerText'>
             


          <div className='text'>
            Ella es una de las ardillas
            y saber como contestar era su pesadilla,
            o al menos era lo que ella creia,
            
            Un primero de noviembre,
            su amiga ardilla no era la de siempre
            Ya que no reia como de costumbre.

            De pronto ella no creia,
            lo que con sus ojos ella veia,
            por que su amiga en la flaca se convertia.

            La flaca en tono de burla,
            ah llegado tu hora exclamo
            dejando a la ardilla muda
            y de un golpe en la cabeza a esta se llevo

            Triste y sola la ardilla andaba
            vagando entre los muertos y la nada
            cuando a lo lejos vio a alguien acostada
            Que levantando la cabeza la miraba

            Entonces la reconocio
            era su amiga ardilla que anoche fallecio
            corriendo hacia ella la abrazo

            juntas de nuevo recorrieron 
            el inframundo con valor
            llenando de risas cada rincon

          </div>
         <div className='Filtro'>
          </div>
      </div>
      <ReactAudioPlayer
                  src={Audio}
                  autoPlay
                  controls
                  className='reproductor'
                />
    </div>
  );
}

export default App;
