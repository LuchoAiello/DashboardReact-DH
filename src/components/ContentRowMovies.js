import React from 'react';
import SmallCard from './SmallCard';


let productInDataBase = {
    color:   "dark",
    titulo: "CANTIDAD DE PRODUCTOS",
    valor: 0,
    icono: "fas fa-shopping-cart",
}

let amount ={
    color:   "dark",
    titulo: "CANTIDAD DE CATEGORÍAS",
    valor: 0,
    icono: "fas fa-tshirt",
}

let user = {
    color:   "dark",
    titulo: "CANTIDAD DE USUARIOS",
    valor: 0,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;