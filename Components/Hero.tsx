"use client"
import React from 'react'
import CostomButton from './CostomButton'
import Image from 'next/image'
import CarsHeroBg from '../public/hero-bg.png'
import CarsHero from '../public/hero.png'
const Hero = () => {
    const handleScroll = () => {
        console.log('clic')
    }
    return (
        <div className=' xs:w-full xl:w-[1920px] '>
            <div className='flex-1 pt-36  padding-x'>
                <h1 className='hero__title'>Find, book, or rent a carr -- and aesily!</h1>
            </div>
            <p className='hero__subtitle xl:px-20   xs:px-20'>
                We are a community of people who love to travel. We want to help you find the best car
            </p>
            <CostomButton
                title="Let's Go"
                containerStyle="bg-primary-blue text-white rounded-full m-10 mt-12 p-4 "
                handleClick={() => { handleScroll }}
            />
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src={CarsHero} className=' object-contain xl:w-[900px] float-right' alt='cars' />
                    <div className="hero__image-overlay  xs:h-18" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
