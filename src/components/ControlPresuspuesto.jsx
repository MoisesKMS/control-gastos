import { useState, useEffect } from "react";
import { formatearCantidad } from "../Helpers";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

function ControlPresuspuesto({ gastos, presupuesto }) {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) =>
            gasto.cantidad + total, 0
        )

        const totalDisponible = presupuesto - totalGastado;

        //calcular el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 400);

        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos]);



    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: '#3b82f6',
                        trailColor: '#F5F5F5',
                        textColor: '#3b82f6'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
                </p>

                <p>
                    <span>Disponible:</span> {formatearCantidad(disponible)}
                </p>

                <p>
                    <span>Gastado:</span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}
export default ControlPresuspuesto;