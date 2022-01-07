import React from 'react';
import '../assets/css/cssPersonalizado.css';
import { Component } from 'react';
import UserList from './UserList'


class User extends Component {
    constructor(){
        super();
        this.state = {
            usersList: []
        }
    };
 
    componentDidMount() {
        fetch('api/users')
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((users) => {
            this.setState({usersList : users.users})
        })
        .catch((error) => console.log(error));
	}

    render(){
     return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 h1-contentRowTop2">Usuarios</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4 userDB">
						<div className="card-body cardColor ">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th className='tableBorder tableP bg-secondary'>Id</th>
                                            <th className='tableBorder tableP bg-secondary'>Nombre</th>
                                            <th className='tableBorder tableP bg-secondary' >Apellido</th>
                                            <th className='tableBorder tableP bg-secondary'>Email</th>
										</tr>
									</thead>
									<tbody>
								     	{
                                          this.state.usersList.map((user,index)=>{
                                            return <UserList {...user} key={index} />
                                           })
					
                                        } 
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
		
        )
	
  }
}

export default User;