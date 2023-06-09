"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CostomButton from './CostomButton'
import { handleWebpackExternalForEdgeRuntime } from 'next/dist/build/webpack/plugins/middleware-plugin'
const Navbar = () => {
    return (
        <header className="sm:w-full xl:w-56 absolute z-10">
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/" className='flex justify-center items-center '>
                    <Image src="/logo.svg" alt='cars' className=' object-contain' width={118} height={18} />
                </Link>
                <CostomButton title="Sing In" btnType="button" containerStyle='text-primary-blue rounded-full bg-white min-w-[130px] sm:float-left xl:float-right' />
            </nav>
        </header>
    )
}

export default Navbar