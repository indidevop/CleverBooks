import React from 'react'
import {notepad} from '../assets'
import {bag} from '../assets'
import {stock} from '../assets'
import {place} from '../assets'

const ProblemSolved = () => {
  return (
    <div className='lg:my-14'>
        <h1 className='text-center font-bold my-5 text-[20px] md:text-[25px] md:leading-[56px] lg:text-[40px] lg:py-5'>Four key questions answered by CleverBooks</h1>
        <div className="card-container flex flex-col justify-center items-center lg:flex-row lg:mx-5 lg:mt-8">
              <div className="card flex flex-col  rounded-2xl p-6 items-start m-5 lg:mx-3 bg-[#f1eafc]">
                <img src={notepad} alt="" className='h-[55px]'/>
                <h3 className='py-3 font-semibold text-[20px]'>What to order</h3>
                <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
              </div>
              <div className="card flex flex-col  rounded-2xl p-6 items-start  m-5 lg:mx-3 bg-[#f1eafc]">
                <img src={bag} alt="" className='h-[55px]'/>
                <h3 className='py-3 font-semibold text-[20px]'>When to order</h3>
                <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
              </div>
              <div className="card flex flex-col  rounded-2xl p-6 items-start  m-5 lg:mx-3 bg-[#f1eafc]">
                <img src={stock} alt="" className='h-[55px]'/>
                <h3 className='py-3 font-semibold text-[20px]'>How much to stock</h3>
                <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
              </div>
              <div className="card flex flex-col  rounded-2xl p-6 items-start  m-5 lg:mx-3 bg-[#f1eafc]">
                <img src={place} alt="" className='h-[55px]'/>
                <h3 className='py-3 font-semibold text-[20px]'>Where to place</h3>
                <p>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
              </div>
        </div>

    </div>
  )
}

export default ProblemSolved