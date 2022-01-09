import React from 'react';
import ProductsCategoryInDb from './ProductsCategoryInDb';
import SmallCardNumber from './SmallCardNumber';
import { Component } from 'react';
// import tablaSnow from '../assets/images/tablaSnow.jpg'

class Product extends Component {
    constructor(){
        super();
        this.state = {
            productName: [],
			productImage: [],
			productDescription: [],
        }
    }

	componentDidMount(){
		fetch('api/products/last-product')
		.then(respuesta => {
			return respuesta.json()})
		.then((producto) => {
			console.log(producto)
			this.setState({productName: producto.product[0].title});
			this.setState({productImage: producto.imageURL});
			this.setState({productDescription: producto.product[0].description});
		})
		.catch((error) => console.log(error));
	}

	render(){
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
										<h5 className="m-0 font-weight-bold h1-contentRowTop1">Último Producto: {this.state.productName}</h5>
									</div>
									<div className="card-body">
										<div className="text-center ">
											<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.productImage} alt="Ultimo Producto agregado"/>
										</div>
										<p>{this.state.productDescription}</p>
										<a className="btn cambiarBoton" target="_blank" rel="nofollow" href="http://localhost:3090/api/products/last-product"> Ver detalle del producto</a>
									</div>
								</div>
							</div>
							<ProductsCategoryInDb />	
						</div>
					</div>
	
			</React.Fragment>
		)
	  }
}


export default Product;