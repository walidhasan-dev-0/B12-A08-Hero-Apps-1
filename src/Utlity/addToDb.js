const getstoreApps = () => {
    const storeApps = localStorage.getItem("redList")
    if(storeApps){
        const storeAppsData = JSON.parse(storeApps);
        return storeAppsData
    }
    else{
        return [];
    }
}
const addStoreData = (id) => {
    const allAppsData = getstoreApps();
    if(allAppsData.includes(id)){
        alert('this id is already exit')
    }
    else{
        allAppsData.push(id)

        const data = JSON.stringify(allAppsData);
        localStorage.setItem("redList", data)
        console.log(addStoreData)
    }

}
export{addStoreData,getstoreApps}
