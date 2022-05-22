import React from 'react'
import Gasto from './Gasto'

function ListadoGastos({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) {
  return (
    <div className='listado-gastos contenedor'>

      {filtro ? (

        <>
          <h2>{gastosFiltrados.length ? `Gastos: Desliza para Editar o Eliminar un gasto.` : 'No hay Gastos aún'}</h2>

          {gastosFiltrados.map(gasto => (

            <Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto}></Gasto>
          ))}
        </>
      ) : (<>
      <h2>{gastos.length ? `Gastos: Desliza para Editar o Eliminar un gasto.` : 'No hay Gastos aún'}</h2>
        {gastos.map(gasto => (

          <Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto}></Gasto>
        ))}
      </>
      )

      }

    </div>
  )
}

export default ListadoGastos