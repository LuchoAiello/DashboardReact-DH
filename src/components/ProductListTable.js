import React from 'react';

function ProductsListTable(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4 cardP">
                <div className=" text-white bg-secondary  shadow cardD">
                <div className="card-body card-bodyList ">
                        <p className='cardE'> {props.title} </p>    
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductsListTable;