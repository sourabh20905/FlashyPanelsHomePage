import React from 'react'

const Slider = () => {
  const arr1 = [
    "User API",
    "Average Time",
    "Drif-feed",
    "Refill",
    "Subscriptions",
    "Notifications"

  ]
  return (
    <div className='relative flex overflow-x-hidden whitespace-nowrap gap-2 bg-gradient-to-r from-indigo-500 my-[100px]'>
        
        
        <div className='py-12 animate-marquee whitespace-nowrap flex mx-6 gap-20'>
        {
            arr1.map((el)=>{
                return <div className='bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full shadow-md hover:scale-95 duration-90 transition-all cursor-pointer'>
                    {el}
                </div>
            })
        }
        </div>
        

        
        <div className=' py-12 animate-marquee whitespace-nowrap flex mx-6 gap-20'>
        
        {
            arr1.map((el)=>{
                return <div className='bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full shadow-md hover:scale-95 duration-90 transition-all cursor-pointer'>
                    {el}
                </div>
            })
        }

        </div>
        
        <div className='py-12 animate-marquee whitespace-nowrap flex mx-6 gap-20 bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded'>
        
        
            Refill
        

        </div>
        

    </div>
  )
}

export default Slider