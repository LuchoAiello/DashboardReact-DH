import React from 'react';
import Products  from './Products';
import {Component} from 'react';

class ProductsCategory extends Component {
    constructor(){
        super()
        this.state = {
            productCategoryList: []
        }
    }

    componentDidMount(){
        fetch('api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(products => {
            this.setState({productCategoryList: products.countByCategory})
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4 cardColor">
                            <div className="card-header py-3 cambiar1">
                                <h6 className="m-0 font-weight-bold h1-contentRowTop1">Total de productos por categoría</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {
                                        this.state.productCategoryList.map((products,index)=>{
                                            return  <Products  {...products}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
      }                           
}

export default ProductsCategory;