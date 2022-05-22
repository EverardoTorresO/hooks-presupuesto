import Mensaje from './Mensaje';
import React, { useState, useEffect } from 'react'
import CerrarBtn from './../img/cerrar.svg'
function Modal({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar,setGastoEditar }) {
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState("");
    const [id, setId] = useState("");
    const [fecha,setFecha]=useState('');

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);
        }
    }, [gastoEditar]);
    const ocultarModal = () => {
        setGastoEditar({});
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("enviado");
        if (nombre === '' || cantidad === '' || categoria === '') {
            setMensaje('Todos los componentes son obligatorios');
            setTimeout(() => {
                setMensaje('');
            }, 3000);
        return;
    }

    guardarGasto({ nombre, cantidad, categoria ,id,fecha});
}
return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />

        </div>
        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}  >
            <legend className='formulario'>{gastoEditar.nombre?'Editar Gasto':'Añadir Gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text" name="nombre" id="nombre" placeholder='Añade el Nombre del Gasto' value={nombre} onChange={e => setNombre(e.target.value)} />
            </div> <div className="campo">
                <label htmlFor="cantidad">Cantidad Gasto</label>
                <input type="number" name="cantidad" id="cantidad" placeholder='Añade la cantidad del Gasto' value={cantidad} onChange={e => setCantidad(Number(e.target.value))} />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select name="categoria" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} >
                    <option value="">--Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
                <input type="submit" value={gastoEditar.nombre?'Guardar Cambios':'Añadir Gasto'} />
            </div>
        </form>

    </div>
)
}

export default Modal