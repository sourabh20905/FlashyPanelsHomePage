import React from 'react'
import Card from './Card'
import {eff} from "../constants/index"
const Efficiency = () => {
  return (
    <div>
      <div className='text-center flex flex-col'>
        <h1 className=' flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[50px]'>Efficiency & Cost Savings <br/> with Our SMM Panels</h1>
        <p>Discover the Exquisite Simplicity: Unveiling Our Intuitive Dashboard and Empowering System Tools!</p>
        <div className='flex flex-row justify-between flex-wrap'>
          <div className='w-[450px]'>
          <Card head = {eff[0].heading} img={eff[0].img} text={eff[0].text} />
          </div>
          <div className='w-[450px]'>
          <Card head = {eff[1].heading} img={eff[1].img} text={eff[1].text}/>
          </div>
          <div className='w-[450px]'>
          <Card head = {eff[2].heading} img={eff[2].img} text={eff[2].text}/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Efficiency