import ControlPresuspuesto from "./ControlPresuspuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

function Header({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto
}) {

    return (
        <>
            <header>
                <h1>Planificador de Gastos</h1>
                {isValidPresupuesto ? (
                    <ControlPresuspuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        gastos={gastos}
                        setGastos={setGastos}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                ) : (
                    <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )}
            </header>
        </>
    )

}
export default Header;