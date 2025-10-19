import React from 'react'
import Card from './Card'
import { motion } from "framer-motion";
import { useStoreContext } from '../contextApi/contextApi';

const LandingPage = () => {

    let desc = "Generated short links quickly"
    const {token} = useStoreContext();
    console.log("Token from LandingPage - " + token)
    

  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-6   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            URL Shortening APP
            </motion.h1>
            <p className='text-slate-700 text-sm-5 my-5'>
                Here you can easily shorten you big urls into small memorable ones.
            </p>

            <div className='flex items-center gap-3'>
                <button className='bg-custom-gradient w-40 text-white rounded-md py-2'>
                Manage Links
                </button>
                <button className='border-btnColor border w-40 text-btnColor rounded-md py-2'>
                Create Short Link
                </button>
            </div>
        </div>
        <motion.img
         initial={{ opacity: 0}}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
         className='sm:w-[400px] w-[350px] object-cover rounded-xl mr-80'
        src='/images/logo.jpg'
        alt=''>
        </motion.img>
      </div>
       <div className='sm:pt-12 pt-7'>
        <div className='pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
            <Card
            title="Simple URL Shortening"
            desc="Easy and simple URL shortening within seconds"/>

            <Card
            title="Analytics Available"
            desc="Get click counts and click events on the go"/>

            <Card
            title="Secure and Reliable"
            desc="Store and manage your shortened URLs securely"/>

            <Card
            title="Lightning Fast"
            desc="Get the results lightning fast"/>
        </div>
      </div>
    </div>

    

  )
}

export default LandingPage