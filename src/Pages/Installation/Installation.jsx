import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getstoreApps } from '../../Utlity/addToDb';
import App from '../App/App2';
import Install from '../Install/Install';


const Installation = () => {
    const [apps,setApps] = useState([])
    const installApps = useLoaderData()
    console.log(installApps)
    useEffect(() => {
        const storeAppsData = getstoreApps()
        console.log(storeAppsData)
        const convertedApps = storeAppsData.map(id => parseInt(id))
        const myApps = installApps.filter(apps => convertedApps.includes(apps.id))
        setApps(myApps)
        console.log(myApps)
    },[])
    console.log(apps)
    return (
        <div>
           <div className='text-center mt-15'>
             <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
            <p className='text-[18px] mt-3'>Explore All Trending Apps on the Market developed by us</p>
          <div className="container mx-auto">
            {
            apps.map(app =><Install key={app.id} app={app}></Install>)
          }
          </div>
           </div>
        </div>
    );
};

export default Installation;