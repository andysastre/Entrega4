import React from 'react';

const UserList = ({ users, selectUser, deleteUser }) => {




    return (
        <div className='container'>
            {
                users.map(user => (
                    <div className='card' key={user.id}>
                        <li >
                            <p><b>First Name: </b>{user.first_name}</p>
                            <p><b>Last Name: </b>{user.last_name}</p>
                            <p><b>Email: </b>{user.email}</p>
                            <p><b>Password: </b>{user.password}</p>
                            <p><b>Birthday: </b>{user.birthday}</p>
                        </li>
                        <button onClick={() => selectUser(user)} className="icon"><i className="fa-solid fa-pen-to-square"></i></button>
                        <button onClick={()=>deleteUser(user.id)} className="icon"><i className="fa-solid fa-trash-can"></i></button>

                    </div>

                ))
            }
        </div>
    );
};

export default UserList;