import React, { useEffect, useState } from 'react';
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
function ControlPresupuesto({ gastos, presupuesto,setGastos, setPresupuesto ,setIsValidPresupuesto}) {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje,setPorcentaje]=useState(0);
    const handleResetApp=()=>{
      const resultado=confirm("¿Estas seguro de resetar la app?");
      if(resultado){
          setPresupuesto(0);
          setGastos([]);
          setIsValidPresupuesto(false);
      }
    }
    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) =>gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        
        const nuevoPorcentaje=(((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2);
        setTimeout(()=>{
            setPorcentaje(nuevoPorcentaje);
        },1200);
        
        setDisponible(totalDisponible);
        setGastado(totalGastado);

    }, [gastos]);

    const formaterCantidad = (cant) => {
        return cant.toLocaleString('en-US', { style: 'currendy', currency: 'USD' });
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div className="">
                <CircularProgressbar value={porcentaje}
                styles={buildStyles({
                    pathColor:porcentaje>100?'#DC2626':'#3B82F6',
                    trailColor:'#F5F5F5',
                    textColor:porcentaje>100?'#DC2626':'#3B82F6',
                   
                })}
                text={`${porcentaje}% Gastado`}
                />

              
            </div>
            <div className="contenido-presupuesto">
                <button className='reset-app' type='button' onClick={()=>{handleResetApp()}}>
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span> ${formaterCantidad(presupuesto)}
                </p>
                <p className={`${disponible<0?'negativo':''}`}>
                    <span>Disponible: </span> ${formaterCantidad(String(disponible))}
                </p>
                <p>
                    <span>Gastado: </span> ${formaterCantidad(String(gastado))}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto