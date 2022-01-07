import React from 'react';
import SmallCard from './SmallCard';
import {Component} from 'react';

class NumberData extends Component{
    constructor(){
        super()
        this.state = {
            productLength : 0,
            usersLength : 0,
            countCategories : 0
        }
    }

    componentDidMount(){
        let countProduct = fetch('api/products').then(respuesta =>{return respuesta.json()});
        let countUsers = fetch('api/users').then(respuesta =>{return respuesta.json()});
        Promise.all ([countProduct,countUsers])
        .then (([countProductos,countUsuarios]) =>{
            this.setState ({countCategories: countProductos.countCategory})
            this.setState ({usersLength: countUsuarios.count})
            this.setState ({productLength: countProductos.count})
        })
    }

render (){
        let value;
        let card;
        
        if (this.state.productLength === ' ') {
            value = <p>Cargando</p>
        } else {
            let productInDataBase = {
                color: "dark",
                title: "Cantidad de productos",
                value: this.state.productLength,
                icon: "fas fa-shopping-cart",
            }
            
            let amount ={
                color: "dark",
                title: "Cantidad de usuarios",
                value: this.state.usersLength,
                icon: "fas fa-user",
            }
            
            let category = {
                color: "dark",
                title: "Cantidad de categorías",
                value: this.state.countCategories,
                icon: "fas fa-tshirt",
            }
            
            card = [productInDataBase, amount, category];

            value = card.map((product,index)=>{
                return <SmallCard  {...product} key= {index}/>
            }) 
        }

        return (
            <React.Fragment>
            <div className="row">
                {value}
            </div>
            </React.Fragment>
        )
    }
};
export default NumberData;