import React from 'react'
import Image from 'next/image'

import { IoArrowForward } from 'react-icons/io5'

const Heropage = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-[3rem] h-full md:h-[70vh] xl:h-screen pt-[10rem] md:pt-[3rem]'>
            <div className='flex flex-col gap-2 justify-center'>
                <h1 className='text-xl font-semibold text-primary-green'>Selamat datang di</h1>
                <p className='text-3xl xl:text-5xl font-bold text-primary-blue xl:leading-[3.5rem]'>Pangkalan Data <br /> Universitas Mercu Buana</p>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore sed natus repellat aut corrupti quo, laudantium ipsa repudiandae assumenda!</p>
                <button className='self-start flex gap-4 items-center mt-8 bg-primary-blue text-white rounded-md px-6 py-4'>
                    Lihat lebih lanjut
                    <IoArrowForward />
                </button>
            </div>
            <div className=''>
                <Image
                    src='/data.svg'
                    width={1000}
                    height={1000}
                    className='w-full h-full object-contain'
                />
            </div>
        </div>
    )
}

export default Heropage