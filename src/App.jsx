import './App.css'
function App() {

//layout  las cosas generales
//pages paginas completas
//utils cartas de servicios, calendario,formularios


const customers =  [
  {
    id: 1,
    name: "Juan",
    identification: "123456789"
  }
]
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-7">
        
          <legend className="border-2 border-bottom">Usuario </legend>
          <form className="d-flex flex-column justify-content-between">
            <div className="form-group d-flex justify-content-center align-items-center gap-2">
              <label htmlFor="identification"></label>
              <input type="text" className="form-control " id="identification" placeholder="Identificación" />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">Crear</button>
            </div>
          </form>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Identificación</th>
                <th scope='col'>Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Telefón</th>
                <th scope="col">Dirección</th>
                <th scope="col">Acciones</th>

              </tr>
            </thead>
            <tbody>
            {customers.map((customer) => (
           <tr key={customer.id}>
              <th scope="row">{customer.id}</th>
              <td>{customer.identification}</td>
              <td>{customer.name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>
                <button type="button" className="btn btn-warning">Editar</button>
                <button type="button" className="btn btn-danger">Eliminar</button>
              </td>
           </tr>
             ))}
         </tbody>

          </table>
        </div>
        <div className="col-sm-12 col-md-5">
      
        </div>
      </div>
    </div>
  )
}

export default App
