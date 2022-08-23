import React, { useState } from 'react';
import './NewLoad.scss';
import WatchLater from '../../../assets/icons/watch_later.svg';
import Close from '../../../assets/icons/close.svg';
import Input from '../../../components/input/Input';
import MiniTruck from '../../../assets/images/mini-truck.svg';
import PickupTruck from '../../../assets/images/pickup-truck.svg';
import NormalTruck from '../../../assets/images/normal-truck.svg';
import LargeTruck from '../../../assets/images/large-truck.svg';
import { FileUploader } from 'react-drag-drop-files';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Pickup from '../Settings/tools/rate/Pickup';
import Calendar from '../../../assets/icons/event_note.svg';
import Button from '../../../components/button';
import BareBtn from '../../../components/button/BareBtn';
import ConfirmCancelLoadModal from './ConfirmCancelLoadModal';
import ConfirmLoadModal from './ConfirmLoadModal';

const NewLoad = ({ setOpenCreateLoadForm }) => {
  const [numOfCharacters, setNumOfCharacters] = useState(0);
  const [truckType, setTruckType] = useState('');
  const [capacityType, setCapacityType] = useState('');
  const fileTypes = ['JPG', 'PNG', 'GIF'];
  const [file, setFile] = useState(null);
  const [pickupDate, setPickupDate] = useState(new Date());
  const [pickupDeadline, setPickupDeadline] = useState(new Date());
  const [location, setLocation] = useState('');
  const [closeLocation, setCloseLocation] = useState(false);
  const [showCancelLoadModal, setShowCancelLoadModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);

  const truckCategoryData = [
    {
      id: 1,
      title: 'Mini Truck',
      description: 'For items smaller than a crate of drinks for example',
      truckType: 'mini truck',
      img: MiniTruck,
      name: 'mini-truck',
    },
    {
      id: 2,
      title: 'Pickup Truck',
      description: ' For items smaller than a petrol generator for example',
      truckType: 'pickup truck',
      img: PickupTruck,
      name: 'pickup-truck',
    },
    {
      id: 3,
      title: 'Normal Truck',
      description: ' For items smaller than a petrol generator for example',
      truckType: 'normal truck',
      img: NormalTruck,
      name: 'normal-truck',
    },
    {
      id: 4,
      title: 'Large Truck',
      description: ' For items smaller than a petrol generator for example',
      truckType: 'large truck',
      img: LargeTruck,
      name: 'large-truck',
    },
  ];
  const truckCapacityData = [
    {
      id: 1,
      title: 'Heavy',
      description: 'For items smaller than a crate of drinks for example',
      capacityType: 'heavy',
      name: 'heavy',
    },
    {
      id: 2,
      title: 'Big',
      description: 'For items smaller than a petrol generator for example',
      capacityType: 'big',
      name: 'big',
    },
    {
      id: 3,
      title: 'Small',
      description: 'For items smaller than a petrol generator for example',
      capacityType: 'small',
      name: 'small',
    },
    {
      id: 4,
      title: 'Light',
      description: 'For extra large items that cannot fit into the others.',
      capacityType: 'light',
      name: 'light',
    },
  ];
  const locationData = [
    {
      id: 1,
      title: 'Lagos',
    },
    {
      id: 2,
      title: 'FCT,Abuja',
    },
    {
      id: 3,
      title: 'Abia',
    },
    {
      id: 4,
      title: 'Adamawa',
    },
    {
      id: 5,
      title: 'AkwaIbom',
    },
    {
      id: 6,
      title: 'Anambra',
    },
  ];

  const handleFileChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <div>
        <div className=' flex justify-between mb-5'>
          <p className='form_title'>Create New Load</p>
          <div className='flex gap-4'>
            <img
              src={WatchLater}
              alt={'watch later'}
              className='cursor-pointer'
            />
            <img
              src={Close}
              alt={'close'}
              className='cursor-pointer'
              onClick={() => setOpenCreateLoadForm(false)}
            />
          </div>
        </div>
        <hr className='opacity-50 my-5 bg-black' />

        <form>
          <Pickup />
          <hr className='opacity-50 my-5 bg-black' />
          <p className='label my-5'>Load Details</p>
          <div className='long-input'>
            <div className='textarea'>
              <textarea
                type='textarea'
                id='load-details'
                cols={50}
                rows={10}
                className='input-field text-sm'
                onChange={(e) => setNumOfCharacters(e.target.value.length)}
                disabled={numOfCharacters === 128}
                placeholder={'Load Details'}
              />
              <p className='flex self-end'>{`${numOfCharacters}/128`}</p>
            </div>
          </div>
          <div className='long-input'>
            <div className='long-input'>
              <Input
                type='text'
                labelName='Load Value (₦)'
                id='load-value'
                holder='Load Value (₦)'
                showLabel={true}
              />
            </div>
          </div>
          <div className='long-input'>
            <div className='long-input'>
              <Input
                type='text'
                labelName='Load Weight (kg)'
                id='load-weight'
                holder='Load Weight (kg)'
                showLabel={true}
              />
            </div>
          </div>
          <div className='radio-input mb-5'>
            <p className='radio-label mb-4'>Truck Category</p>
            {truckCategoryData.map((data) => (
              <div
                className={`flex gap-2 radio-container ${
                  truckType === data.truckType && 'checked'
                } `}
                onClick={() => setTruckType(data.truckType)}
                key={data.id}
              >
                <img src={data.img} alt={data.truckType} />
                <div>
                  <p className='title'>{data.title}</p>
                  <p className='description'>{data.description}</p>
                </div>
                <input
                  type='radio'
                  name={data.name}
                  value={data.truckType}
                  checked={truckType === data.truckType}
                />
              </div>
            ))}
          </div>
          <div className='radio-input'>
            <p className='radio-label mb-4'>Truck Capacity</p>
            {truckCapacityData.map((data) => (
              <div
                className={`flex gap-2 radio-container ${
                  capacityType === data.capacityType && 'checked'
                } `}
                onClick={() => setCapacityType(data.capacityType)}
                key={data.id}
              >
                <div>
                  <p className='title'>{data.title}</p>
                  <p className='description'>{data.description}</p>
                </div>
                <input
                  type='radio'
                  name={data.name}
                  value={data.capacityType}
                  checked={capacityType === data.capacityType}
                />
              </div>
            ))}
          </div>
          <hr className='opacity-50 my-5 bg-black' />
          <p className='label mb-5'>Upload images of load(optional)</p>

          <FileUploader
            multiple={true}
            handleChange={handleFileChange}
            name='file'
            types={fileTypes}
          />
          <hr className='opacity-50 my-5 bg-black' />

          <p className='label mb-5'>Receiver&#39;s information</p>
          <div className='long-input'>
            <div className='long-input'>
              <Input
                type='text'
                labelName='Receiver&#39;s  Name'
                id='receiver-name'
                holder='Receiver&#39;s name'
                showLabel={true}
              />
            </div>
          </div>
          <div className='long-input'>
            <div className='long-input'>
              <Input
                type='text'
                labelName='Receiver&#39;s phone number'
                id='receiver-number'
                holder='Receiver&#39;s phone number'
                showLabel={true}
              />
            </div>
          </div>
          <hr className='opacity-50 my-5 bg-black' />

          <p className='label mb-5'>Other information</p>
          <div className='long-input'>
            <div className='long-input'>
              <div className='date-container'>
                <div>
                  <label className='label-field mb-2'>Pickup Date</label>

                  <DatePicker
                    selected={pickupDate}
                    onChange={(date) => setPickupDate(date)}
                    name='pickupDate'
                    dateFormat='MM/dd/yyyy'
                  />
                </div>
                <img src={Calendar} alt='calendar' className='m-2' />
              </div>
            </div>
          </div>
          <div className='long-input'>
            <div className='long-input'>
              <div className='date-container'>
                <div>
                  <label className='label-field mb-4'>
                    Deadline for Load Pickup
                  </label>
                  <DatePicker
                    selected={pickupDeadline}
                    onChange={(date) => setPickupDeadline(date)}
                    name='dealineDate'
                    dateFormat='MM/dd/yyyy'
                  />
                </div>
                <img src={Calendar} alt='calendar' className='m-2' />
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <p>Choose State</p>
            <img
              src={Close}
              alt={'close'}
              className='cursor-pointer'
              onClick={() => setCloseLocation(true)}
            />
          </div>
          <hr className='opacity-50 my-5 bg-black' />

          <div className={`radio-input ${closeLocation === true && 'hidden'} `}>
            <p className='radio-label mb-4'>Location</p>
            {locationData.map((data) => (
              <div
                className={`flex justify-between radio-container ${
                  location === data.title && 'checked'
                } `}
                onClick={() => setLocation(data.title)}
                key={data.id}
              >
                <p className='title'>{data.title}</p>

                <input
                  type='radio'
                  name={data.title}
                  value={data.title}
                  checked={location === data.title}
                />
              </div>
            ))}
          </div>
          <button className='btn'>Continue</button>
        </form>
        {/* <BareBtn
          text='Cancel & Delete Load'
          width='100%'
          action={setShowCancelLoadModal(true)}
          // onClick={() => setShowCancelLoadModal(true)}
        /> */}
        <button
          className='bare-btn'
          onClick={() => setShowCancelLoadModal(true)}
        >
          Cancel & Delete Load
        </button>
      </div>
      {showCancelLoadModal && (
        <ConfirmCancelLoadModal
          setShowCancelLoadModal={setShowCancelLoadModal}
          setOpenCreateLoadForm={setOpenCreateLoadForm}
        />
      )}
      {showLoadModal && (
        <ConfirmLoadModal setShowLoadModal={setShowLoadModal} />
      )}
    </>
  );
};

export default NewLoad;
