import React from 'react';
import { createBrowserRouter } from "react-router";
import Roots from '../Pages/Roots/Roots';
import Errorpages from '../Pages/Errorpages/Errorpages';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Appsdetalis from '../Pages/AppsDetalis/Appsdetalis';
import Installation from '../Pages/Installation/Installation';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    errorElement:<Errorpages></Errorpages>,
    children: [
      {
        index:true,
        path:"/",
        loader:() => fetch('../HomeData.json'),
        Component:Home
      },
      {
        path:"/apps",
        loader:() => fetch('Apps.json'),
        Component:Apps
      },
      {
        path:'apps/:appsId',
        loader:() => fetch('../Apps.json'),
        Component:Appsdetalis
      },
      {
        path:'/install',
        loader:() => fetch('../Apps.json'),
        Component:Installation
      }
    ]
  },
]);