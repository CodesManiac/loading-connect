import React from 'react';
import Button from '../../../components/button';
import BareBtn from '../../../components/button/BareBtn';
import Modal from '../../../components/modal';
import './ConfirmCancelLoad.scss';

const ConfirmCancelLoadModal = ({
  setShowCancelLoadModal,
  setOpenCreateLoadForm,
}) => {
  return (
    <Modal>
      <div className='cancel-modal text-center py-5 px-10 space-y-3'>
        <p className='title'> Cancel Load Creation?</p>
        <p className='description'>
          Are you sure you want to cancel the creation of this load?
        </p>
        <button
          className='btn'
          onClick={() => {
            setShowCancelLoadModal(false);
            setOpenCreateLoadForm(false);
          }}
        >
          Yes, cancel
        </button>
        <button
          className='bare-btn'
          onClick={() => setShowCancelLoadModal(false)}
        >
          No
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

export default ConfirmCancelLoadModal;
