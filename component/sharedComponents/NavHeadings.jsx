import React from 'react';
import { Link } from 'react-router-dom';

const NavHeadings = ({navText,link}) => {
  return (
    <>
        <Link to={link}><h2 className='text-bold cursor-pointer text-gray-400 hover:text-white text-md'>{navText}</h2></Link>
    </>
  )
}

export default NavHeadings;