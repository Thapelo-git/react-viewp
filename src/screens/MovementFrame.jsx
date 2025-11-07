// MovementFrame.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MovementFrame = () => {
  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      rotateY: 90
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "backOut"
      }
    })
  };

  const wordVariants = {
    hidden: { 
      opacity: 0,
      x: -100 
    },
    visible: (i) => ({ 
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3 + 0.5,
        duration: 0.8,
        ease: "circOut"
      }
    })
  };

  const title = "LOTEK PERICDEL";
  const words = title.split(" ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-8">
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
      >
        {/* First Word - LOTEK */}
        <motion.div
          className="mb-4"
          variants={wordVariants}
          custom={0}
        >
          {words[0].split("").map((letter, index) => (
            <motion.span
              key={`letter-${index}`}
              className="inline-block text-8xl md:text-9xl font-black text-gray-900"
              variants={letterVariants}
              custom={index}
              whileHover={{ 
                scale: 1.2,
                y: -10,
                color: "#dc2626",
                transition: { duration: 0.2 }
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Second Word - PERICDEL */}
        <motion.div
          variants={wordVariants}
          custom={1}
        >
          {words[1].split("").map((letter, index) => (
            <motion.span
              key={`letter-${index + words[0].length}`}
              className="inline-block text-8xl md:text-9xl font-black text-gray-900"
              variants={letterVariants}
              custom={index + words[0].length}
              whileHover={{ 
                scale: 1.2,
                y: -10,
                color: "#dc2626",
                transition: { duration: 0.2 }
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-0"
          animate={{
            opacity: [0, 0.3, 0],
            x: [-100, 100]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      </motion.div>
    </div>
  );
};

export default MovementFrame;