import React, { useState } from 'react'
import Button from '../../../../../components/button'
import SecurityLayout from '../Securiy'
import './style.scss'
import download from '../../../../../assets/images/download-img.svg'

const KycVerification = () => {
  const [showLabel, setShowLabel] = useState(false)
  const [file, setFile] = useState('')

  const showImage =()=>{
    const inputImage = document.querySelector("input[type=file]").files[0];
    setFile(inputImage.name)
  }

  const hideText =()=>{
    const uploadInfo = document.getElementById("uploads");
    console.log('mercy')
    if(file === '')
      uploadInfo.classList.add("hidden-div");
  }

  return (
    <SecurityLayout>
        <div className='p-14 pr-60'>        
          <div className='select-container'>
          {showLabel&& <label className='select-label-field' >Document Type</label>}
          <select name="state" id="state" className='select-input-field text-placeholderGray' required onClick={(e)=> e.target.value?setShowLabel(true):setShowLabel(false)}
          >
            <option value="" selected >Document Type</option>
            <option value="Passport" >International Passport</option>
            <option value="PVC" >Permanennt Voter's Card (PVC)</option>
            <option value="Drivers-license" >Driver's License</option>
            <option value="NIN" >National Identification Number (NIN)</option>
          </select>
          </div>
          <label for='input-tag' className="block text-primary font-bold text-sm mt-5"
          >Upload Document Image
                <div className='border border-dashed border-darkGray h-40 mt-2 mb-10 rounded-lg flex justify-center items-center'
                onClick={hideText}
                >
                  <div id='uploads' className='flex gap-4' >
                  <img src={download} alt='drag and drop'></img>
                  <div>
                    <p className='text-darkGreen'>Drag your Image here, or <span className='text-primary'>Browse</span></p>
                    <p className='text-xs text-darkGreen'>Supports jpg, jpeg & PNG</p>
                  </div>
                  </div>
                  <span id='imageName' className='text-primary'>{file}</span>
                  </div>
                <input id='input-tag' type="file" className='hidden' onChange={showImage}/>
            </label>
          <Button text='Save Changes' />
        </div>
    </SecurityLayout>
  )
}

export default KycVerification