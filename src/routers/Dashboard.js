import React from 'react'

import NavBar from '../components/NavBar';
// import DashboardSideBar from '../components/Dashboard_SideBar';
import MyAccount from '../components/Dashboard_MenuPages/myAccount';

const Dashboard = (details) => {
  console.log("Login Details : ", details);
  return (
    <div>
      <NavBar />
      {/* <DashboardSideBar sample={true} /> */}
      <MyAccount sample={true}/>
    </div>
  )
}

export default Dashboard;