import React from 'react';

const Footer = () => { 
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div>
            <p className='text-center'>Copyright &#169;{year}</p>
        </div>
    );
};

export default Footer;