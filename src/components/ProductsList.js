import React from 'react';
import ProductListTable  from './ProductListTable';
import {Component} from 'react';

class ProductsList extends Component {
    constructor(){
        super()
        this.state = {
            productList: []
        }
    }

    componentDidMount(){
        fetch('api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(products => {
            this.setState({productList: products.products})
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <h1 className="h3 mb-2 h1-contentRowTop2">Lista de productos</h1>
					
					{/*<!-- DataTales Example -->*/} 
					<div className="card shadow mb-4 userDB carbProductList cardContentWidth">
						<div className="card-body cardColor cardA">
							<div className="carbProductListContent card-bodyProductList cardB">	
								     	{
                                          this.state.productList.map((product,index)=>{
                                            return <ProductListTable {...product} key={index} />
                                           })
                                        } 		
							</div>
						</div>
					</div>            
               
            </React.Fragment>
        )
      }                           
}

export default ProductsList;