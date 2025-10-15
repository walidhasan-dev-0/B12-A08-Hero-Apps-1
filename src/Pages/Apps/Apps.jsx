import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App2';
import { Search } from 'lucide-react';

const Apps = () => {
    const appData = useLoaderData()
    console.log(appData)
    

     const [Search,setSearch] = useState('')
     const term = Search.trim().toLocaleLowerCase()
     console.log(term,Search)
     const searchApps = term? appData.filter(app => app.title.toLocaleLowerCase().includes(term)) : appData
     


    return (
        
            <div>
               <div className="text-center mt-20">
                 <h1 className='font-bold text-5xl'>Our All Applications</h1>
           <p className='text-[#627382] text-[18px] mt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
               </div>
               <div className="flex mt-10 items-center container mx-auto justify-between">
                <h3>({appData.length}) Apps Found</h3>
                <label className="input">
                    
                    <input
                     value={Search}
                    onChange={(e) => setSearch(e.target.value)} type="search" placeholder="search apps" />
                </label>
               </div>
               <div className="container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-9 items-center justify-center"> 
                <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                {
                    searchApps.map(app => <App key={app.id} app={app}></App>)
                }
                </Suspense>
               </div>
            </div>
        
    );
};

export default Apps;