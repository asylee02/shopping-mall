import React from 'react'
import { CiShop } from "react-icons/ci";
import { BsPencilFill } from "react-icons/bs";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex flex-col justify-center items-center'>
        <div className='flex items-center justify-between w-11/12 border-b-2 border-gray-300'>
            <Link to='/' className='flex items-center text-brand'>
                <CiShop className='text-7xl'/>
                <p className='text-5xl'>Shoppy</p>
            </Link>
            <nav className='flex float-right text-2xl font-bold'>
                <Link to='/products' className='mr-5'>Products</Link>
                <Link to='/carts' className='mr-5'>Carts</Link>
                <Link to='/products/new'><BsPencilFill /></Link>
                <p className='ml-5'>Login</p>
            </nav>
        </div>
    </header>
  )
}

