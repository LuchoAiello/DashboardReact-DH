import React from 'react';

function Products(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                <div className="card-body card-bodyP">
                        <p>{props.TablaDeSkate.category} tiene {props.TablaDeSkate.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                    <div className="card-body card-bodyP">
                        <p >{props.TablaDeSnow.category} tiene {props.TablaDeSnow.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                   <div className="card-body card-bodyP">
                        <p>{props.TablaDeSurf.category} tiene {props.TablaDeSurf.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                   <div className="card-body card-bodyP">
                        <p>{props.GafasDeSnow.category} tiene {props.GafasDeSnow.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                   <div className="card-body card-bodyP">
                        <p>{props.Pantalones.category} tiene {props.Pantalones.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                   <div className="card-body card-bodyP">
                        <p>{props.Zapatillas.category} tiene {props.Zapatillas.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                   <div className="card-body card-bodyP">
                        <p>{props.ShortDeBabaño.category} tiene {props.ShortDeBabaño.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                   <div className="card-body card-bodyP">
                        <p>{props.Camperas.category} tiene {props.Camperas.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                   <div className="card-body card-bodyP">
                        <p>{props.Remeras.category} tiene {props.Remeras.count} productos </p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-secondary  shadow">
                   <div className="card-body card-bodyP">
                        <p>{props.Gorros.category} tiene {props.Gorros.count} productos </p>    
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Products;