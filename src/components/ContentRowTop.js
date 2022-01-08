import React from 'react';
import ProductsCategoryInDb from './ProductsCategoryInDb';
import SmallCardNumber from './SmallCardNumber';
import { Component } from 'react';
import tablaSnow from '../assets/images/tablaSnow.jpg'

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 h1-contentRowTop">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<SmallCardNumber />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4 cardColor">
								<div className="card-header py-3 cambiar " >
									<h5 className="m-0 font-weight-bold h1-contentRowTop1">Último Producto</h5>
								</div>
								<div className="card-body">
									<div className="text-center ">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={tablaSnow} alt="Ultimo Producto agregado"/>
									</div>
									<p>descripcion</p>
									<a className="btn cambiarBoton" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
								</div>
							</div>
						</div>
						<ProductsCategoryInDb />	
					</div>
				</div>

        </React.Fragment>
    )
  }
export default ContentRowTop;