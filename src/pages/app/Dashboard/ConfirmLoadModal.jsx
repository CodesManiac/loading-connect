import React from 'react';
import Button from '../../../components/button';
import BareBtn from '../../../components/button/BareBtn';
import Modal from '../../../components/modal';
import './ConfirmCancelLoad.scss';

const ConfirmLoadModal = ({ setShowLoadModal }) => {
  return (
    <Modal>
      <div className='cancel-modal text-center py-5 px-10 space-y-3'>
        <p className='title'> Send Load Pickup Invitation?</p>
        <p className='description'>
          Invite John Doe Buisness to pickup this load?
        </p>
        <button className='btn' onClick={() => setShowLoadModal(false)}>
          Yes, accept
        </button>
        <button className='bare-btn' onClick={() => setShowLoadModal(false)}>
          No,cancel
        </button>

        {/* <Button
          text='Yes, cancel'
          width='70%'
          onClick={() => setShowCancelLoadModal(false)}
        />
        <BareBtn text='No' width='50%' /> */}
      </div>
    </Modal>
  );
};

export default ConfirmLoadModal;
