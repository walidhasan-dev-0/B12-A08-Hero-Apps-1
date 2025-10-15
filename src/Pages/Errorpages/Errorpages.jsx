import React from 'react';
import error from '../../assets/error-404.png'
import { Link } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
const Errorpages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto flex flex-col items-center mt-20">
                <img className='' src={error} alt="" />
                <h2 className='text-[25px] font-bold'>Oops, page not found!</h2>
                <p className='text-gray-500'>The page you are looking for is not available.</p>
                <Link to="/" className='mt-4 btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white'>Go Back!</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Errorpages;