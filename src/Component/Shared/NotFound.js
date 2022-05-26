import React from 'react';
import notFound from '../../images/notFound.png';

const NotFound = () => {
    return (
        <div>
            <img className='w-full max-h-[60vh]' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;