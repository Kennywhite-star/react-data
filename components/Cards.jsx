import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
  return (
    <div className='w-full px-4 py-[10rem] bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto bg-white mt-[-3rem]' src={Single} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className=' text-4xl text-center font-bold'>$125</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 3GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3  text-black'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl  bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto bg-transparent mt-[-3rem]' src={Double } alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className=' text-4xl text-center font-bold'>$125</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 3GB</p>
                </div>
                <button className='text-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3  bg-black'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto bg-white mt-[-3rem]' src={Triple} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className=' text-4xl text-center font-bold'>$125</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 3GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3  text-black'>Start Trial</button>
            </div>

        </div>
        
    </div>
  )
}

export default Cards
