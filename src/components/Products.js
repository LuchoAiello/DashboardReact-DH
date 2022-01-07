import React from 'react';

function Products(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                <div className="card-body card-bodyP">
                        <p>{props.Skate.category} tiene {props.Skate.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                    <div className="card-body card-bodyP">
                        <p >{props.Snow.category} tiene {props.Snow.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                   <div className="card-body card-bodyP">
                        <p>{props.Surf.category} tiene {props.Surf.count} productos </p>    
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Products;