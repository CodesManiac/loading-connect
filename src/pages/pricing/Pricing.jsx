import React,{useState} from 'react'
import { Faq, Footer, NavBar } from '../../components'
import BgHero from '../../components/bgHero/BgHero'
import Switch from '../../components/switchToggle/Switch';
import Monthly from './components/monthly/Monthly';
import Yearly from './components/yearly/Yearly';

const Pricing = () => {
  const [showMonthly, setShowMonthly]= useState(false)
  return (
    <div>
      <NavBar />
      <BgHero
        text="Plans  for Truck Owners"
        subTitle="Load connect gives truck owners different plans to choose from to help them do more using Load Connect.,"
      />
      <Switch setShowMonthly={setShowMonthly} showMonthly={showMonthly} />
      {showMonthly ? <Monthly /> : <Yearly />}
      <Faq />
      <Footer />
    </div>
  );
}

export default Pricing