import React, { useEffect, useState } from 'react';
import axios from "axios"
const UserForm = ({ getUsers, userSelected, deselectUser }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        if (userSelected !== null) {
            setFirstName(userSelected?.first_name);
            setLastName(userSelected?.last_name)
            setEmail(userSelected?.email)
            setPassword(userSelected?.password)
            setBirthday(userSelected?.birthday)
        }
    }, [userSelected])


    const submit = e => {
        e.preventDefault();

        const user = {

            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthday
        }

        if (userSelected !== null) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers();
                    reset();
                    deselectUser();
                })
        } else {

            axios.post("https://users-crud1.herokuapp.com/users/", user)
                .then(() => getUsers())
                .catch(err => console.log(err.response))
        }
    }

    const reset = () => {

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");

    }





    return (




        <form className='input-container' onSubmit={submit}>
            <h2 className='Title'>Users Form</h2>
            <div>
                <input placeholder="First Name" type="text"
                    className="input"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <input placeholder="Last Name" type="text"
                    className="input"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} />
            </div>
            <div>
                <input placeholder="Email"
                    type="text"
                    className="input"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <input placeholder="Password"
                    type="text"
                    className="input"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <input placeholder=""
                    type="date"
                    className="input"
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                />
            </div>
            <button className='button'>Submit</button>
            <button onClick={reset} className="button">Clear</button>
        </form>

    );
};

export default UserForm;