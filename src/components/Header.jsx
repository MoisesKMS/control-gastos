import ControlPresuspuesto from "./ControlPresuspuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

function Header({
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