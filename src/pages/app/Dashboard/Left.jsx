import React from 'react';
import Delete from '../../../assets/icons/delete.svg';
import Add from '../../../assets/icons/add.svg';
import Clock from '../../../assets/icons/clock.svg';
import Plus from '../../../assets/icons/plus.svg';
import WatchLater from '../../../assets/icons/watch-later.svg';
const Left = () => {
  const routes = [
    {
      id: 1,
      from: 'Commercial Ave Sabo yaba, Lagos',
      to: 'Admirity Way, Lekki phase 1, Lagos',
    },
    {
      id: 2,
      from: 'Commercial Ave Sabo yaba, Lagos',
      to: 'Admirity Way, Lekki phase 1, Lagos',
    },
    {
      id: 3,
      from: 'Commercial Ave Sabo yaba, Lagos',
      to: 'Admirity Way, Lekki phase 1, Lagos',
    },
  ];
  return (
    <div className=''>
      <div className='flex gap-2'>
        <div className='left_card rounded-lg p-2 mb-6'>
          <img src={Plus} alt='plus' />
          <p>Create Load Now</p>
        </div>
        <div className='right_card rounded-lg p-2 mb-6'>
          <img src={WatchLater} alt='watch later' />

          <p> Schedule Load</p>
        </div>
      </div>
      <hr className='mb-6' />
      <div>
        <p className='heading mb-4'>Recent Routes</p>
        {routes.map((route) => (
          <div className='card rounded-lg p-4 mb-6' key={route.id}>
            <p className='identifier'>From</p>
            <p className='location pb-3'>{route.from}</p>
            <p className='identifier'>To</p>
            <p className='location mb-3'>{route.to}</p>
            <div className='flex gap-3'>
              <div className='buttons rounded-lg p-2'>
                <img src={Add} alt='add' />
              </div>
              <div className='buttons rounded-lg p-2'>
                <img src={Clock} alt='add' />
              </div>
              <div className='buttons rounded-lg p-2'>
                <img src={Delete} alt='add' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left;
