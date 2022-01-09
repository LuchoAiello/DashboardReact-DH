import React from 'react';

function ProductsListTable(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4 cardP">
                <div className=" text-white bg-secondary  shadow cardD">
                <div className="card-body card-bodyList ">
                    <a target="_blank" className='cardE' href={props.detail}>{props.title}</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductsListTable;