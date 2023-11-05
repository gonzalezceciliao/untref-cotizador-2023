
function Historiales() {
    let historial = []

    const getDatos = () => {
        const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []

        historial = historialCotizaciones

        for (let i = 0; i < historial.length; i++) {
            console.log(historial[i])
        }
    }

    getDatos()

    return (
        <>
            <div className="container border border-2 rounded border-primary">
                <table className="table table-hover mt-2">
                    <thead className="border-bottom border-primary">
                        <tr>
                            <th>Fecha de cotización</th>
                            <th>Propiedad</th>
                            <th>Ubicación</th>
                            <th>Metros cuadrados</th>
                            <th>Póliza mensual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historial.map((elemento) => (
                            <tr key={elemento.getData}>
                                
                                <td key={elemento.id}>{elemento.fecha}</td>
                                <td key={elemento.id}>{elemento.propiedad}</td>
                                <td key={elemento.id}>{elemento.ubicacion}</td>
                                <td key={elemento.id}>{elemento.metros}</td>
                                <td key={elemento.id}>{elemento.poliza}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Historiales;