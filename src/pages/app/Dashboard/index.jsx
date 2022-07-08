import React from 'react';

import DashboardLayout from '../../../components/DashboardLayout';
import Left from './Left';
import './styles.scss';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='dashboard'>
        <div className='dashboard-left'>
          <Left />
        </div>
        <div className='dashboard-middle'>midle</div>
        <div className='dashboard-right'>right</div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
