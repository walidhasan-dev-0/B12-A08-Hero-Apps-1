import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import heroPng from '../../assets/hero.png'
const Banner = () => {
    return (
        <div>
            <div className='text-center mt-20'>
                <h1 className='text-7xl font-bold text-[#001931]'>We Build</h1>
                <h1 className='text-7xl font-bold text-[#001931]'><span className='bg-gradient-to-r from-[#632EE3]
 to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-[#627382] text-[18px] mt-4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div>
                    <button className='btn m-7 font-bold'><a className='flex items-center gap-4' href="https://play.google.com/store"><FaGooglePlay className='text-[30px] text-red-500' /> GooglePlay</a> </button>
                    <button className='btn font-bold'><a className='flex items-center gap-4' href="https://www.apple.com/app-store/"> <FaAppStoreIos className='text-[30px] text-blue-300' /> Appstore</a></button>
                    <div className='mt-4'>
                        <img className='continer mx-auto' src={heroPng} alt="" />
                    </div>
                </div>

            </div>
            <div className='mt-8 rounded-2xl bg-gradient-to-r from-[#632EE3]  to-[#9F62F2]'>
                <div className='p-20'>
                    <h1 className='text-center text-5xl text-white font-medium'>Trusted by Millions, Built for You</h1>
                    <div className='grid lg:grid-cols-3 mt-8'>
                        <div className='text-center space-y-2'>
                            <p className='text-white/70'>Total Downloads</p>
                            <h1 className='text-6xl text-white font-bold'>29.6M</h1>
                            <p className='text-white/70'>21% more than last month</p>
                        </div>
                         <div className='text-center space-y-2'>
                            <p className='text-white/70'>Total Reviews</p>
                            <h1 className='text-6xl text-white font-bold'>906K</h1>
                            <p className='text-white/70'>46% more than last month</p>
                        </div>
                         <div className='text-center space-y-2'>
                            <p className='text-white/70'>Active Apps</p>
                            <h1 className='text-6xl font-bold text-white'>132+</h1>
                            <p className='text-white/70'>31 more will Launch</p>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>



            <div className='mt-5 text-center'>
                    <h1 className='text-5xl font-bold'>Trending Apps</h1>
                    <p className='mt-4 text-[18px] text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                
        </div>
    );
};

export default Banner;