import { CiSaveDown2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
const HomepageApps = ({apps}) => {
    const myData = apps
     const {image,companyName,description,title,ratingAvg, reviews,} =apps
    console.log(myData)
   
    return (
        <div className="">
    <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">

    {/* Title & Company */}
    <div className="flex justify-between">
      <span>title:{title}</span>
      <span>company:{companyName}</span>
    </div>

    {/* Rating & Reviews */}
    <div className="flex justify-between">
      <span>ratingAvg:{ratingAvg}</span>
      <span>reviews:{reviews}</span>
    </div>

    {/* Description */}
    <p>Description:{description}</p>

    {/* Buttons */}
    <div className="flex items-center justify-between top-3">
      <button className="btn bg-[#F1F5E8] btn-xs text-[#00D390] text-[20px]"><CiSaveDown2 className="text-[#00D390]"/> 9M</button>
      <button className="btn btn-xs text-[#FF8811] text-[20px] bg-[#FFF0E1]"><FaRegStar className="text-[#FF8811]" /> 5</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomepageApps;