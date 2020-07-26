import React, { Fragment } from 'react'

// import app components
import ProfileHeader from '../components/headers/ProfileHeader';
import OrderList from '../components/lists/OrderList';

const Dashboard = () => {
  return (
    <Fragment>
      <ProfileHeader />
      <OrderList />
    </Fragment>
  )
}

export default Dashboard
