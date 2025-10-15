import React from 'react';

import { FaRegStar } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

const Install = ({app}) => {
    console.log(app)
    const {image,title,ratingAvg,reviews} = app
    return (
        <div className=''>
           <div className="flex items-center gap-7 mt-10 bg-gray-300 p-3 rounded-2xl">

            <div>
                <img className='w-[100px] rounded-2xl' src={image} alt="" />
            </div>

            <div>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <div className='flex gap-4 mt-4'>
                     <h2>
                        <button className="btn btn-xs bg-[#F1F5E8  text-[#00D390] text-[20px]"><CiSaveDown2 className='text-[#00D390]' /> 9M</button>
                    </h2>
                    <h2 className='flex items-center gap-3'>
                        <button className="btn btn-xs text-[#FF8811] text-[20px] bg-[#FFF0E1]"><FaRegStar className='text-[#FF8811]' /> 5</button>
                        <h2>258 Mb</h2>
                        </h2>
                   
                </div>
                
            </div>




           </div>



        </div>
    );
};

export default Install;