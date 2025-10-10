import React, { useState } from 'react';
import {useLoaderData, useParams } from 'react-router';
import { FaDownload } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
const Appsdetalis = () => {
   
    const {appsId} = useParams()

    const allid = parseInt(appsId)
    const appsData = useLoaderData()
    const singleApps = appsData.find(apps => apps.id === allid)
    const {image,description,title,ratingAvg,reviews} = singleApps
    

    

    
    return (
        <div className="container mx-auto mt-8 ">
        



            <div className="bg-base-100 lg:flex items-center justify-center gap-10  p-5">
              <div>
                <img className='w-[250px] rounded-2xl ' src={image} alt="" />
              </div>
              <div className="card-body flex-1">
                <h2 className="card-title border-b p-2 border-gray-400 text-[30px]">Title: {title}</h2>
                <div className='flex items-center gap-20 mt-5'>
                  <div className="flex flex-col items-center">
                      <span><FaDownload className='text-[30px] text-[#54CF68]' /></span>
                    <h3 className='text-[#54CF68] font-bold'>Downlod</h3>
                    <h1 className='text-[20px] font-bold text-[#54CF68]'>9M</h1>
                  </div>
                  <div className="flex flex-col items-center">
                      <span><FaRegStar className='text-[30px] text-[#FF8811]' /></span>
                    <h3 className='font-bold text-[#FF8811]'>Average Ratings</h3>
                    <h1 className='text-[25px] font-bold text-[#FF8811]'>{ratingAvg}</h1>
                  </div>
                  <div className="flex flex-col items-center">
                      <span><AiOutlineLike className='text-[30px] text-[#632EE3]' /></span>
                    <h3 className='text-[#632ee6] font-bold'>Total Reviews</h3>
                    <h1 className='text-[25px] font-bold text-[#632ee6]'>{reviews}</h1>
                  </div>
                </div>
                <div className="card-actions border-b border-gray-400 p-5">
                  <button className="btn bg-[#00D390] text-white">InstallNow</button>
                </div>
              </div>
            </div>



            
            
        </div>
        
    );
};

export default Appsdetalis;