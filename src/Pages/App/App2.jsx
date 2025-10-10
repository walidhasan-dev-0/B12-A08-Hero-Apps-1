import React from 'react';
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';
const App = ({app}) => {
    const {title,reviews,id,ratingAvg
,description,companyName,image}=app
    console.log(app)
    return (
        <div>
            

<Link to={`/apps/${id}`}>


<div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img 
    className='w-full aspect-[4/3] object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body flex-1">

    {/* Title & Company */}
    <div className='flex justify-between'>
        <span>title: {title}</span>
        <span>company: {companyName}</span>
    </div>

    {/* Rating & Reviews */}
    <div className='flex justify-between'>
        <span>rating: {ratingAvg}</span>
        <span>reviews: {reviews}</span>
    </div>

     {/* Description */}
   <span className='flex-1'>Description: {description}</span>

    {/* Buttons */}
    <div className="flex justify-between">
      <button className="btn btn-xs bg-[#F1F5E8  text-[#00D390] text-[20px]"><CiSaveDown2 className='text-[#00D390]' /> 9M</button>
      <button className="btn btn-xs text-[#FF8811] text-[20px] bg-[#FFF0E1]"><FaRegStar className='text-[#FF8811]' /> 5</button>
    </div>
  </div>
</div>





</Link>





        </div>
    );
};

export default App;