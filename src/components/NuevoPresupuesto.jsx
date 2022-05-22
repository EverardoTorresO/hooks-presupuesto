import { useState } from 'react'
import Mensaje from './Mensaje';
function NuevoPresupuesto({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) {
  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();
    console.log("Enviando Formulario")
    if (!(presupuesto) || (presupuesto) < 0) {
      setMensaje('No es un presupuesto valido'); return;
    }
    setMensaje('');
    setIsValidPresupuesto(true);
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input type="number" className='nuevo-presupuesto' placeholder='Añade Tu nuevo Presupuesto' value={presupuesto} onChange={(e) => { setPresupuesto((e.target.value)) }} />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto