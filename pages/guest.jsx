import { useState, useEffect } from 'react'


import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/Navbar'
import DataMahasiswa from '../sections/DataMahasiswa'
import Heropage from '../sections/Heropage'

import LogoUMB from '../public/LogoUMB/logo-umb-full.png'
import LogoUMB2 from '../public/LogoUMB/logo-umb.png'

import { FiMenu } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'

const guest = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 80 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })

    return (
        <>
            <nav className={`${shadowNav ? 'shadow-md' : 'shadow-none'} bg-white fixed top-0 duration-300 z-[100] w-full px-4 md:px-8 xl:px-[5rem] py-4 flex justify-between items-center`}>
                <div className='flex gap-2 md:gap-4 items-center'>
                    <Link href='/'>
                        <Image
                            alt='logo UMB'
                            src={shadowNav ? LogoUMB2 : LogoUMB}
                            className={`${shadowNav ? 'w-8 h-8 md:w-[3rem] md:h-[3rem] xl:h-[3.5rem] xl:w-[3.5rem]' : 'w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] xl:h-[7rem] xl:w-[7rem]'} duration-500 cursor-pointer`}
                        />
                    </Link>
                    <div className={`border-l-2 border-primary-blue flex flex-col justify-center px-2 md:px-5 ${shadowNav ? 'py-0' : 'py-1 md:py-4'}`}>
                        <p className='text-xs md:text-base xl:text-xl font-semibold'>Pangkalan Data</p>
                        <p className='text-sm md:text-lg xl:text-xl font-semibold text-primary-blue'>Universitas Mercu Buana</p>
                    </div>
                </div>

                <Link
                    href='/login'
                    className='bg-primary-blue text-white font-semibold py-2 px-6'>
                    Login
                </Link>
            </nav>

            <div className='px-4 md:px-8 xl:px-[5rem]'>
                <Heropage />
            </div>
        </>
    )
}

export default guest