import React from 'react';
import Genre  from './Genre';

let genres = [
    
]

function ProductCategory(){
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
                                    genres.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default ProductCategory;