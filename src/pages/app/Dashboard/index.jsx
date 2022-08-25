import React, { useState } from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import Map from '../../../components/map';
import Left from './Left';
import Middle from './Middle';
import NewLoad from './NewLoad';
import './styles.scss';

const Dashboard = () => {
  const [openCreateLoadForm, setOpenCreateLoadForm] = useState('false');
  return (
    <DashboardLayout>
      <div className='dashboard'>
        <div className='dashboard-left'>
          <Left setOpenCreateLoadForm={setOpenCreateLoadForm} />
        </div>
        <div className='dashboard-middle'>
          {openCreateLoadForm ? (
            <NewLoad setOpenCreateLoadForm={setOpenCreateLoadForm} />
          ) : (
            <Middle type='Find Trucks' display='hidden' />
          )}
        </div>
        <div className='dashboard-right'>
          <Map />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
