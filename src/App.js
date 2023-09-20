import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Designs from './component/Designs/Designs';
import Sidebar from './component/Navigation/Navigation';
import Users from './component/Users/Users';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Table from './component/table/OCC';
// import Table2 from './component/table/Table';
import DemoTable from './component/table/DemoTable';



function App() {

  return (
    
   <div>
    <h1>Users</h1>
    <Table></Table>
    {/* <Table2></Table2> */}
    {/* <DemoTable></DemoTable> */}

   </div>
    
  );
}

export default App;
