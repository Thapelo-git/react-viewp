import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import Linkedin from '../assets/linkedin.png'

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px")
  return (
    <section id='skills' className='pt-10 '>
        <div className='md:flex md:justify-between md:gap-16 mt-32'>
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
                <LineGradient width='w-2/3'/>

                <p className='mt-10 mb-7'>
                    Knowledgeable in utilizing MongoDB for database management,
                    Express.js for server-side logic,React.js for client-side rendering ,
                    and Node.js for backend development.
                </p>
                </motion.div>
                <div className='mt-16 md:mt-0 flex col-span-3 gap-4'>
                
               <motion.div 
               className='md:w-1/3 basis-1/2'
              initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
              transition={{duration:0.5}} variants={{
                  hidden:{opacity:0,x:-50},
                  visible:{opacity:1,x:0}
              }}>
                  <div className='flex justify-center items-center shadow bg-deep-blue
                  p-4 shadow-lg shadow-cyan-500/50 w-20 h-20  my-2'>
                      <img alt='css' src={require('../assets/css.png')} className='w-10' />
                  </div>
                  <div className='flex justify-center items-center shadow bg-deep-blue
                  p-4 shadow-lg shadow-cyan-500/50 w-20 h-20 my-2'>
                      <img alt='html' src={require('../assets/html.png')} className='w-10' />
                  </div>
                  <div className='flex justify-center items-center shadow bg-deep-blue
                  p-4 shadow-lg shadow-cyan-500/50 w-20 h-20 my-2'>
                      <img alt='javascript' src={require('../assets/javascript.png')} className='w-10' />
                  </div>

              </motion.div>
              <motion.div 
               className='md:w-1/3 basis-1/2'
              initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
              transition={{duration:0.5}} variants={{
                  hidden:{opacity:0,y:-50},
                  visible:{opacity:1,y:0}
              }}>
                 
                  <div className='flex justify-center items-center shadow bg-deep-blue
                  p-4 shadow-lg shadow-cyan-500/50 w-20 h-20 my-2'>
                      <img alt='react' src={require('../assets/react.png')} className='w-10' />
                  </div>
                  <div className='flex justify-center items-center shadow bg-deep-blue
                  p-4 shadow-lg shadow-cyan-500/50 w-20 h-20 my-2'>
                      <img alt='bootstrap' src={require('../assets/bootstrap.png')} className='w-10' />
                  </div>
                  <div className='flex justify-center items-center shadow bg-deep-blue
                  p-4 shadow-lg shadow-cyan-500/50 w-20 h-20 my-2'>
                      <img alt='tailwind' src={require('../assets/tailwind.png')} className='w-10' />
                  </div>

              </motion.div>
              <motion.div 
               className='md:w-1/3 basis-1/2'
              initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
              transition={{duration:0.5}} variants={{
                  hidden:{opacity:0,x:50},
                  visible:{opacity:1,x:0}
              }}>
                  <div className='flex justify-center items-center shadow bg-deep-blue
                  p-4 shadow-lg shadow-cyan-500/50 w-20 h-20 my-2 '>
                      <img alt='node' src={require('../assets/node.png')} className='w-10' />
                  </div>
                  <div className='flex justify-center items-center shadow bg-deep-blue
                  p-4 shadow-lg shadow-cyan-500/50 w-20 h-20 my-2'>
                      <img alt='node' src={require('../assets/express.jpg')} className='w-10' />
                  </div>
                  <div className='flex justify-center items-center shadow bg-deep-blue
                  p-4 shadow-lg shadow-cyan-500/50 w-20 h-20 my-2'>
                      <img alt='node' src={require('../assets/mongo2.png')} className='w-10' />
                  </div>

              </motion.div>
          
                </div>
               
        </div>
                <div className='md:flex md:justify-between mt-16 gap-32 '>
                <motion.div 
                 className='md:w-4/5'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,y:50},
                    visible:{opacity:1,y:0}
                }}>
                    <div className='relative h-32'>
                        <div className='z-10'>
                        <p className='font-playfair font-semibold text-3xl mt-3'>Experience</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]
                            '>
                            <div className=' absolute flex justify-center inset-x-0 bottom-0 '>
                            <p className='font-playfair text-md '>Mobile and Web Development Trainee</p>
                            </div>
                       
                        </div>
                    </div>
                    
                   
                </motion.div>
                <div className='basis-auto'>
                    <p className='mt-5  '>
                        As a seasoned technologist,my expertise spans a range of cutting-edge 
                        technologies,including React.js,React Native ,Node.Js ,Express.Js and MongoDb.
                        With a comprehensive understanding of these modern tools,I am well-equipped to design
                         and develop innovative web solutions that drive business success.
                    </p>
                    </div>
                </div>
    </section>
  )
}

export default MySkills