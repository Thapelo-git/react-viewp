import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Profile from '../assets/Pro.jpeg'
import SocialMediaIcons from '../components/SocialMediaIcons'
const Landing = (setSelectedPage) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (

    <section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
        <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
            {isAboveMediumScreens?(
                <div
                className='relative z-0 ml-20 before:absolute before:-top-0 before:-left-0
                before:rotate-45 before:w-full before:max-w-[400px] before:h-full
                before:border-2 before:border-red before:z-[-1]'
                >
                     <img alt='profile' 
                     className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                      max-w-[400px] md:max-w-[400px]'
                     src={Profile}/>
                </div>
            ):(
                <img alt='profile' 
                className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                  rounded-t-[400px]  rounded-b-[400px] max-w-[400px] md:max-w-[600px]'
                src={Profile}/>
            )}
</div>
            <div className='z-30 basic-2/5 mt-12 md:mt-32'>
                <motion.div 
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                }}>
                    {/* xs:before:content-brush */}
                    <p className='text-6xl font-playfair z-10
                    text-center md:text-start'>Thapelo {" "}
                  
                    <span className='xs:relative xs:text-white xs:font-semibold z-20
                       
                     before:absolute before:-left[-25px]
                    before:-top-[70px] before:z-[-1] '>
                       Chaba
                    </span>
                  
                    </p>
                    <p className='mt-10 mb-7 text-sm text-center md:text-start'>
                    Skilled Full-Stack Web Developer with a strong proficiency in React,
                    capable of handling all aspects of web developmen, from concept to deployment.
                        </p>
                </motion.div>
                <motion.div
                className='flex mt-5 justify-center md:justify-start'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:0.5}} variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                }}>
                <AnchorLink 
                className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 
                px-7 font-semibold hover:bg-blue hover:text-white transition duration-500'
                onClick={()=>setSelectedPage={setSelectedPage}} 
                href="#contact">
                    Contact
                </AnchorLink>
                <div
                className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
                 
       >
                    <div className='bg-deep-blue hover:text-red transition duration-500
                    w-full h-full flex items-center justify-center font-playfair px-10'>
                        <a href='https://silver-gloriana-57.tiiny.site'>CV</a>
                    </div>
                </div>
                </motion.div>
                <motion.div 
                  className='flex mt-5 justify-center md:justify-start'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                }}>
                    <SocialMediaIcons/>
                </motion.div>
            
        </div>
    </section>
  )
}

export default Landing