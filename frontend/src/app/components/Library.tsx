"use client";
import React from 'react'
import {TbPlaylist} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'

const Library = () => {
    const onClick = () => {
        console.log('clicked')
    };

  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5 pt-4'>
            <div className='inline-flex items-center gap-x-2'>
                <TbPlaylist className='text-neutral-400' size={26} />
                <p className='text-neutral-400 font-medium text-md'>
                    Library
                </p>
            </div>
            <AiOutlinePlus className='text-neutral-400 cursor-pointer hover:text-white transition' size={26} onClick={onClick} />
        </div>
        <div className='flex flex-col gap-y-2 mt-2 px-3'>
            List of Songs
        </div>
    </div>
  )
}

export default Library