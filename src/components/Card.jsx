import React from 'react'

const Card = ({head,img,text}) => {
  return (
    <div>
        <div className='flex flex-col justify-evenly p-10 shadow-xl m-8 hover:scale-95 transition-all duration-200 cursor-pointer '>
            <div className='mb-4'>
            <img src={img} className='w-[600px] h-[300px] bg-[#F5F5F5] rounded-lg shadow-xl inline object-scale-down'/>
            </div>
            <div className='text-left'>
                <h1 className=' text-lg font-poppins font-semibold dark:text-white'>{head}</h1>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Card