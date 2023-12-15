import React from 'react'
import { CiLogout, CiShop } from "react-icons/ci";
import { BsPencilFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { login, logout, onUserStateChange } from './api/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import User from './User';


export default function Header() {
  const [user,setUser] = useState();

  useEffect(()=>{
    onUserStateChange(setUser)
  },[])

  return (
    <header className='flex flex-col justify-center items-center'>
        <div className='flex items-center justify-between w-11/12 border-b-2 border-gray-300'>
            <Link to='/' className='flex items-center text-brand'>
                <CiShop className='text-7xl'/>
                <p className='text-5xl'>Shoppy</p>
            </Link>
            <nav className='flex float-right text-2xl font-bold items-center'>
                <Link to='/products' className='mr-5'>Products</Link>
                <Link to='/carts' className='mr-5'>Carts</Link>
                <Link to='/products/new' className='mr-5 text-3xl'><BsPencilFill /></Link>
                {user && <User user={user}/>}
                {!user && <button onClick={login} className='ml-5'>Login</button>}
                {user &&  <button onClick={logout} className='ml-5'>Logout</button>}
                
            </nav>
        </div>
    </header>
  )
}

