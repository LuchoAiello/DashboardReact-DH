import React from 'react';
import '../assets/css/cssPersonalizado.css'


function Movie(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 h1-contentRowTop2">Usuarios</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4 userDB">
						<div className="card-body cardColor ">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Email</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>01</td>
											<td>Juan</td>
											<td>Martinez</td>
                                            <td>Jmartinez@gmail.com</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;