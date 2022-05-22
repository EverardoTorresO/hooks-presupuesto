import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
function Header({ setGastos,gastos,presupuesto, setPresupuesto , isValidPresupuesto , setIsValidPresupuesto}) {
  return (
    <header>
        <h1>Control de Gastos</h1>

        {isValidPresupuesto?(
          <ControlPresupuesto setGastos={setGastos} presupuesto={presupuesto} setPresupuesto={setPresupuesto}  gastos={gastos} setIsValidPresupuesto={setIsValidPresupuesto}></ControlPresupuesto>
        ):(
          <NuevoPresupuesto  presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}></NuevoPresupuesto>
        )}
       
    </header>
  )
}

export default Header