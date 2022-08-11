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
  const [verification, setVerification] = useState(2)

  const showImage =()=>{
    const inputImage = document.querySelector("input[type=file]").files[0];
    setFile(inputImage.name)
  }

  // const hideText =()=>{
  //   const uploadInfo = document.getElementById("uploads");
  //   if(file === '')
  //     uploadInfo.classList.add("hidden-div");
  // }
  const data = ["International Passport", "Permanent Voter's Card (PVC)", "Driver's License", "National Identification Number (NIN)"]

  return (
    <SecurityLayout>
        <div className='p-14 pr-60'>        
          <div className='relative'>
            <div onClick={()=>setDropOptions(!dropOptions)}>
              <img src={arr} alt="" className='absolute right-4 top-7' ></img>
              <Input disabled='disabled' className='input-field' labelName='Document Type' holder='Document Type'
              >
              </Input>
            </div>
          {dropOptions && (
            <div className='absolute w-full shadow-xl bg-gray rounded-lg mt-1 p-2 flex flex-col gap-2 text-sm'>
              {data.map((child, index)=>(
              <div className='flex justify-between border border-darkGray p-2 rounded-lg'>
                <p>{child}</p>
                <div className='flex'>
                  <input type='radio' name='verification-type' value={child} className='peer'
                  // checked = {verification === index}
                  key = {index}
                  onClick={()=> setVerification(verification)}
                  />
                  <div className="
                  peer
                  after:block
                  after:border
                  peer-checked:after:content-['✓']
                  after:bg-white
                  peer-checked:after:text-white
                  peer-checked:after:text-center
                  peer-checked:after:bg-secondary
                  after:rounded-full after:h-5 after:w-5 
                  after:transition-all
                  ">
                    {/* ring-peer-checked:after:ring-black */}
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
          <label for='input-tag' className="block text-primary font-bold text-sm mt-5"
          >Upload Document Image
                <div className='border border-dashed border-darkGray h-40 mt-2 mb-10 rounded-lg flex justify-center items-center'
                > 
                  {!file &&
                    <div id='uploads' className='flex gap-4' >
                  <img src={download} alt='drag and drop'></img>
                  <div>
                    <p className='text-darkGreen'>Drag your Image here, or <span className='text-primary'>Browse</span></p>
                    <p className='text-xs text-darkGreen'>Supports jpg, jpeg & PNG</p>
                  </div>
                  </div>}
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