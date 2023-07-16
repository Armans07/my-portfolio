// import React from 'react';
// import {FaFacebookF, FaInstagram, FaInstagramSquare, FaRegCopyright, FaTwitter, FaTwitterSquare } from 'react-icons/fa';

// const Footer = () => {
//   return (

//     <div>
//       <div className='bg-dark pt-5 mt-2'>
//         <div className='text-success text-center'>
//           <FaFacebookF />
//           <FaInstagramSquare className='mx-5'></FaInstagramSquare>
//           <FaTwitterSquare></FaTwitterSquare>
//         </div>
//         <div className=' text-center text-light'>
//           <small className='mx-3'>Home</small>
//           <small className='mx-3'>Menu</small>
//           <small className='mx-3'>Story</small>
//           <small className='mx-3'>Detox</small>
//           <small className='mx-3'>Location</small>
//         </div>
//         <div className=' text-center text-light'>
//           <small className='mx-3'>Contact</small>
//           <small className='mx-3'>Blog</small>
//           <small className='mx-3'>Catering</small>
//           <small className='mx-3'>Delevery</small>

//         </div>
//         <div className='bg-success text-center p-3 mt-4'>
//           <p className='text-white'><small><FaRegCopyright></FaRegCopyright> ALL Rights Reverved</small></p>
//         </div>
//       </div>
//     </div>



//   );
// };

// export default Footer;
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()}Arman. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
