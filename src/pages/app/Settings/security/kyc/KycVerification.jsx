import React, { useState } from 'react'
import Button from '../../../../../components/button'
import SecurityLayout from '../Securiy'
import './style.scss'
import download from '../../../../../assets/images/download-img.svg'
import arr from '../../../../../assets/icons/down-arr-slim.svg'
import Input from '../../../../../components/input/Input'

const KycVerification = () => {
  const [file, setFile] = useState('')
  const [dropOptions, setDropOptions] = useState(false)

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
          <div className='relative'>
            <img src={arr} alt="" className='absolute right-4 top-7' onClick={()=>setDropOptions(!dropOptions)}></img>
            <Input disabled='disabled' className='input-field' labelName='Document Type' holder='Document Type'
            >
          </Input>
          {dropOptions && (
            <div className='absolute w-full shadow-xl bg-gray rounded-lg mt-1 p-2 flex flex-col gap-2 text-sm'>
            <div className='flex justify-between border border-darkGray p-2 rounded-lg'>
                <p>International Passport</p>
                <input type='radio' name='verification-type' value="Passport" className='peer'/>
                <div className="
                peer
                peer-checked:after:content-['✓']
                after:absolute
                after:border
                after:bg-white after:top-4 after:right-7
                peer-checked:after:text-white
                peer-checked:after:text-center
                peer-checked:after:bg-secondary
                ring-peer-checked:after:ring-black
                after:rounded-full after:h-5 after:w-5 after:transition-all">
                </div>
            </div>
            <div className='flex justify-between border border-darkGray p-2 rounded-lg'>
                <p>Permanennt Voter's Card (PVC)</p>
                <input type='radio' name='verification-type' value="PVC" className=''/>
                {/* <div className="
                peer
                peer-checked:after:content-['✓']
                after:absolute
                after:bg-white after:top-4 after:right-7
                peer-checked:after:text-white
                peer-checked:after:text-center
                peer-checked:after:bg-secondary
                ring-peer-checked:after:ring-black
                after:rounded-full after:h-5 after:w-5 after:transition-all">
                </div> */}
            </div>
            <div className='flex justify-between border border-darkGray p-2 rounded-lg'>
                <p>Driver's License</p>
                <input type='radio' name='verification-type' value="Drivers-license" className=''/>
                {/* <div className="
                peer
                peer-checked:after:content-['✓']
                after:absolute
                after:bg-white after:top-4 after:right-7
                peer-checked:after:text-white
                peer-checked:after:text-center
                peer-checked:after:bg-secondary
                ring-peer-checked:after:ring-black
                after:rounded-full after:h-5 after:w-5 after:transition-all">
                </div> */}
            </div>
            <div className='flex justify-between border border-darkGray p-2 rounded-lg'>
                <p>National Identification Number (NIN)</p>
                <input type='radio' 
                name='verification-type' value="NIN"
                className=''/>
                {/* <div className="
                peer
                peer-checked:after:content-['✓']
                after:absolute
                after:bg-white after:top-4 after:right-7
                peer-checked:after:text-white
                peer-checked:after:text-center
                peer-checked:after:bg-secondary
                ring-peer-checked:after:ring-black
                after:rounded-full after:h-5 after:w-5 after:transition-all">
                </div> */}
            </div>
            </div>
          )}
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