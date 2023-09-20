import { useEffect, useState } from "react";
import axios from 'axios';
import './users.css'

export default function Users(){
    const [users, setusers] =  useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/cars').then(res=>{
            console.log(res);
            setusers(res.data);
        })
    },[])
    
    
    return <div>
        <h1>users list</h1>
        {users.map((user, index)=><h1>{user.name}  - {user.email}  - {user.age}</h1>)}

    </div>
}