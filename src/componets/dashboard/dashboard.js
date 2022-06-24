import React from 'react'
import {Table} from 'react-bootstrap';
import './dashboard.css'

const dashboard = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
            <ul class="mt-5">
                <li>
                <p
                    class="block h-full p-2 border border-gray-700 rounded-lg hover:border-pink-600 text-center">
                    <h5 class="text-base text-[#FFFF00]">PROGRAM</h5>
                    <span class="mt-1 text-xs font-medium text-[#FFFF00]">
                    1
                    </span>
                </p>
                </li>
                </ul>
            </div>
            <div className='col-md-3'>
            <ul class="mt-5 space-y-2 ">
                <li>
                <p
                    class="block h-full p-2 border border-gray-700 rounded-lg hover:border-pink-600 text-center">
                    <h5 class="text-base text-[#FFFF00]">TOTAL REPORTS</h5>
                    <span class="mt-1 text-xs font-medium text-[#FFFF00]">
                    3
                    </span>
                </p>
                </li>
                </ul>
            </div>
            <div className='col-md-3'>
            <ul class="mt-5 space-y-2">
                <li>
                <p
                    class="block h-full p-2 border border-gray-700 rounded-lg hover:border-pink-600 text-center">
                   <h5 class="text-base text-[#FFFF00]">APPROVED REPORTS</h5>
                    <span class="mt-1 text-xs font-medium text-[#FFFF00]">
                    10
                    </span>
                </p>
                </li>
                </ul>
            </div>
            <div className='col-md-3'>
            <ul class="mt-5 space-y-2">
                <li>
                <p
                    class="block h-full p-2 border border-gray-700 rounded-lg hover:border-pink-600 text-center">
                     <h5 class="text-base text-[#FFFF00]">PERFORMANCE</h5>
                    <span class="mt-1 text-xs font-medium text-[#FFFF00]">
                    40%
                    </span>
                </p>
                </li>
                </ul>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 mt-4'>
            <div class="relative block p-4  bg-[#3e3e3e]">
            <div>
            <span class="absolute right-8 top-7 rounded-[10px] px-3 py-1.5 bg-white text-[#000] font-medium text-xs">
                SHE ALL
            </span>
            <span class=" top-4 rounded-[10px] px-3 py-1.5 bg-white text-[#000] font-medium text-xs">
            PROGRAMS
            </span>
            </div>

    <div className='table-content'>
    <div>
        <h3 className='text-white text-[14px]'>PROGRAM NAME</h3>
        <div className='text-[12px] pt-4 text-[#FFFF00]'>
        <p>dashboard-1</p>
        <p>dashboard-2</p>
        <p>dashboard-3</p>
        </div>
    </div>
    <div>
        <h3 className='text-white text-[14px]'>DATE</h3>
    </div>
    <div>
        <h3 className='text-white text-[14px]'>EDIT PROGRAM</h3>
        <div className='text-[12px] pt-4 text-[#FFFF00]'>
        <p>EDIT-1</p>

        </div>
    </div>
    
</div>

</div>
            </div>
            <div className='col-md-6 mt-4'>
            <div class="relative block p-4 bg-[#3e3e3e]">
            <div>
            <span class="absolute right-8 top-7 rounded-[10px] px-3 py-1.5 bg-white text-[#000] font-medium text-xs">
                SHE ALL
            </span>
            <span class=" top-4 rounded-[10px] px-3 py-1.5 bg-white text-[#000] font-medium text-xs">
            PROGRAMS
            </span>
            </div>

    <div className='table-content'>
    <div>
        <h3 className='text-white text-[14px]'>PROGRAM NAME</h3>
        <div className='text-[12px] pt-4 text-[#FFFF00]'>
        <p>dashboard-1</p>
        <p>dashboard-2</p>
        <p>dashboard-3</p>
        </div>
    </div>
    <div>
        <h3 className='text-white text-[14px]'>DATE</h3>
    </div>
    <div>
        <h3 className='text-white text-[14px]'>EDIT PROGRAM</h3>
        <div className='text-[12px] pt-4 text-[#FFFF00]'>
        <p>EDIT-1</p>

        </div>
    </div>
    
</div>




</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default dashboard