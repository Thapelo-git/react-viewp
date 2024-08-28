import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import Linkedin from '../assets/linkedin.png'

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px")
  return (
    <section id='skills' className='pt-10 pb-24'>
        {/* <div className='md:flex md:justify-between md:gap-16 mt-32'> */}
        <motion.div 
                 className='md:w-1/3'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                }}>
                <p className='font-playfair font-semibold text-4xl mb-5'>
                    MY <span className='text-red'>SKILLS</span>
                </p>
                <LineGradient width='w-1/3'/>

                <p className='mt-10 mb-7'>
                    im
                </p>
                </motion.div>
                <motion.div 
                 className='md:w-1/3'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,y:50},
                    visible:{opacity:1,y:0}
                }}>
                    <div className='flex justify-center items-center shadow bg-deep-blue
                    p-4 shadow-lg shadow-cyan-500/50 w-20 h-20 '>
                        <img alt='linken' src={Linkedin} className='w-10' />
                    </div>

                </motion.div>
        {/* </div> */}
                <div className='md:flex md:justify-between mt-16 gap-32'>
                <motion.div 
                 className='md:w-1/3'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,y:50},
                    visible:{opacity:1,y:0}
                }}>
                    <div className='relative h-32'>
                        <div className='z-10'>
                        <p className='font-playfair font-semibold text-3xl mt-3'>Experience</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]'/>
                    </div>
                    <p className='mt-5'>
                        dgfhgkj
                    </p>
                </motion.div>
                </div>
    </section>
  )
}

export default MySkills