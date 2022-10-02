import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Products', path: '/products'},
        {id: 3, name: 'Shop', path: '/shop'},
        {id: 4, name: 'About', path: '/about'},
        {id: 5, name: 'Contact', path: '/contact'},
    ]
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <nav className='bg-purple-500 w-full'>
            <div onClick={() => setOpen(!open)} className=" md:hidden h-6 w-6 text-amber-500">
                {
                    open ? 
                    <XMarkIcon />
                    :
                    <Bars3Icon />

                }
            </div>
            <ul className={`md:flex justify-center absolute duration-500 ease-in-out md:static bg-purple-500 w-full ${open ? 'top-6' : 'top-[-120px]'}`}>

                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;