import { useEffect, useState } from "react";
import axios from 'axios';

export default function AddUser(){
    const [email, setemail] =  useState('');
    const [name, setName] =  useState('');
    const [age, setage] =  useState('');

    const handleSubmit = ()=>{
        axios.post('http://localhost:3001/cars', {name:name, email:email, age:age}).then(res=>{
            setName('');
            setemail('');
            setage('');
            console.log(res);
        }).catch(err=>
            console.log(err)
        )
    
    }
    return <div>
        <h1>add users</h1>
        <label for="name">name</label>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} id="name"></input>
        <label for="email">email</label>
        <input value={email} onChange={(e)=>{setemail(e.target.value)}} id="email"></input>
        <label for="age">age</label>
        <input value={age} onChange={(e)=>{setage(e.target.value)}} id="age"></input>
        <button onClick={handleSubmit}>add users</button>
    </div>
}