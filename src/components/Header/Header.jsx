import React from 'react';

const Header = () => {
    return (
        <header className='bg-white fixed w-full z-10 top-0'>
            <div className="container mx-auto px-[2.5%] border-b-2">
                <nav className='flex items-center justify-between py-4'>
                    <h1 className='text-3xl font-bold'>
                        Tech Knowledge
                    </h1>
                        <img className='w-12 h-12 overflow-hidden rounded-full'  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                </nav>
            </div>
        </header>
    );
};

export default Header;