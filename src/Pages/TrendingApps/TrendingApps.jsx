import React, { Suspense, useEffect, useState } from 'react';
import HomepageApps from '../Homepage/HomepageApps';



const TrendingApps = ({loadData}) => {
    
    return (
        <div>
            
          <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
           <div className='grid items-center justify-center lg:grid-cols-4 sm:grid-cols-2 container mx-auto gap-8'>
             {
                
            loadData.map(apps => <HomepageApps key={apps.id} apps={apps}></HomepageApps>)
          }
           </div>
            
          </Suspense>
        </div>
    );
};

export default TrendingApps;