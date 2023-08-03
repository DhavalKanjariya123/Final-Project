import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

function Deletecartmenu() {
    const[deletecart, setDeletecart]=useState(0);
    const {id}=useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:4000/cart/${id}`)
        .then((res)=>{
            setDeletecart(res.data)
            alert("Successfully deleted the Menu")
            // navigate=("/")
            window.location="/"
        })
    })
  return (
    <>

    </>
  )
}

export default Deletecartmenu
