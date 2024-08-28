import React from 'react'
import { LinkedIn ,FacebookRounded,GitHub} from '@mui/icons-material'
import Linkedin from "../assets/linkedin.png"
const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com'
        target='_blank'
        rel='noreferrer'

        >
            <LinkedIn fontSize="large"/>
            {/* <img alt='linkedin' src={Linkedin}/> */}

        </a>
        <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.facebook.com'
        target='_blank'
        rel='noreferrer'

        >
            <FacebookRounded fontSize='large'/>
        </a>
        <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.github.com'
        target='_blank'
        rel='noreferrer'

        >
            <GitHub fontSize='large'/>
        </a>
    </div>
  )
}

export default SocialMediaIcons