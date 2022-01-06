import React from 'react';
import '../assets/css/cssPersonalizado.css'

function SmallCard(props){
    return(
        <React.Fragment>
            <div className="col-md-4 mb-4 ">
                <div className={`card border-left-card shadow h-100 py-2 cardColor`}>
                    <div className="card-body ">
                        <div className="row no-gutters align-items-center  ">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800 ">{(props.moneda ? '$'+props.value:  props.value)}</div>
                            </div>
                            <div className="card-icon col-auto">
                                <i className={`fas ${props.icon} fa-2x card-icon`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SmallCard;