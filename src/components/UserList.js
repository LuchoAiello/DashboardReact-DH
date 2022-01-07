import React from 'react';

function UserList(props){
    return(
        <React.Fragment>
            <tr>
				<td className='tableBorder bg-secondary'>{props.id}</td>
			    <td className='tableBorder bg-secondary'>{props.first_name}</td>
				<td className='tableBorder bg-secondary'>{props.last_name}</td>
                <td className='tableBorder bg-secondary'>{props.email}</td>
		    </tr>        
        </React.Fragment>
    )
}
export default UserList;