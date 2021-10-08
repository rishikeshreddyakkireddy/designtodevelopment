import React from 'react'
import spartan from './sparpng.png'
const Banner = () => {
    return (
        <div className=' pr-36'>
            <div className=' flex justify-center items-center pt-48    '>
                <p className='text-8xl font-bold' >People who <br/> care about <br/>your growth</p>
                
            </div>

            <div className="  flex items-center justify-center space-x-10 pt-20 pr-20 ">
            <div className=" bg-black-dark text-white px-8 py-5 cursor-pointer ">
                <button className=' text-xl ' >
                    Get started 
                </button>
            </div>  

            <div className='px-7 py-5 text-xl cursor-pointer'>
                <button >
                    Try platform for free
                </button>
            </div>
            </div>
            <div className=' flex'>
                <img src={spartan} alt="" className='ml-auto w-56 h-54 mr-36' />
            </div>
        </div>
    )
}

export default Banner;