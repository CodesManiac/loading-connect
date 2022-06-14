import React from 'react'
import { Faq, Footer, NavBar } from '../../components'
import BgHero from '../../components/bgHero/BgHero'

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <BgHero
        text="Plans  for Truck Owners"
        subTitle="Load connect gives truck owners different plans to choose from to help them do more using Load Connect.,"
      />
      <Faq/>
      <Footer/>
    </div>
  );
}

export default Pricing