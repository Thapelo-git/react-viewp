import React from 'react'
import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'

const Projects = () => {

    const container ={
        hidden:{},
        visible:{
            transition:{staggerChildren:0.2}
        }
    }
    const projectVariant ={
        hidden:{opacity:0,scale:0.8},
        visible:{opacity:1,scale:1}
    }

    
    const Project = ({name,title,description,projectLink})=>{
        const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90
        transition duration-500 bg-grey z-30 flex flex-col justify-center
        items-center text-center p-16 text-deep-blue`
        const projectTitle = name.split(" ").join("-").toLowerCase();
        return (
            <motion.div 
            // variants={projectVariant}
             className='relative'>
                <div
                 className={overlayStyles}
                >
                    <p className='text-2xl font-playfair'>{title}</p>
                <p className='mt-7'>
                   {description}
                </p>
                <a href={projectLink}><h4 className='text-blue   capitalize'>View Project</h4></a>
                </div>
                <img src={require(`../assets/${projectTitle}.jpg`)} alt={projectTitle}/>
            </motion.div>
        )
    }   

  return (
    <section id='projects' className='pt-48 pb-48'>
             <motion.div 
                 className='md:w-2/4 mx-auto text-center'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,y:-50},
                    visible:{opacity:1,y:0}
                }}>
                    <div>
                <p className='font-playfair font-semibold text-4xl '>
                    <span className='text-red'>PRO</span>JECTS
                </p>
                <div className='flex justify-center mb-5'>
                <LineGradient width='w-1/3'/>
                </div>
                </div>
                
                
                </motion.div>
                <div className='flex justify-center'>
                <motion.div 
                className='sm:grid sm:grid-cols-3'
                initial='hidden'
                whileInView='visible'
                viewport={{once:true,amount:0.5}}
                variants={container}
                >
                    <div
                    className='flex justify-center text-center items-center
                    p-10 bg-red max-w-[400px] max-h-[400px] text-2xl 
                    font-playfair font-semibold '
                    >
                        USER INTERFACES
                    </div>
                    <Project 
                    name='project 1'
                    title="E-society Administrator"
                    description='Managing Payments and Events'
                    projectLink='https://github.com/Thapelo-git/e-societyAdmin-master'
                    />
                    
                    <Project name="project 2"
                       title="Medico App"
                       description=' Medico connects students with access to first aid and health measures'
                       projectLink='https://github.com/washington786/medico'/>

                    <Project name="project 3"
                    title="Hotel App"
                    description='#React Native'
                    projectLink='https://github.com/Thapelo-git/hotelApp'/>
                    
                    <Project name="project 5"
                    title="Prison Management App"
                    description='#React Native'
                    projectLink='https://github.com/Thapelo-git/Prison_Management_System'/>
                </motion.div>
                </div>
    </section>
  )
}

export default Projects