import React, {useState} from "react";

const Form = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e)=> {
        e.preventDefault();
        alert('Name: ${name},Email: ${email},password: ${password}')
    };
};
return (
    <div>
        <h2>Constant form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                
            </div>
        </form>
    </div>
)                                     